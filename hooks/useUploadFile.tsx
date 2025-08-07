import React, { useEffect, useRef, useState } from 'react';

interface IUploadFileProps {
  accept?: string;
  maxFileSize?: number;
  disabled?: boolean;
  setFiles?: (file: File[]) => void;
}

const isFileAccepted = (file: File, accept: string) => {
  const acceptedTypes = accept.split(',').map((type) => type.trim());
  const fileType = file.type;
  const fileExtension = `.${file.name.split('.').pop()?.toLowerCase()}`;
  return acceptedTypes.some(
    (type) => type === fileType || type === fileExtension,
  );
};

export const useUploadFile = ({
  maxFileSize,
  disabled = false,
  setFiles,
  accept,
}: IUploadFileProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!disabled && ref.current) {
      ref.current.value = '';
    }
  }, [disabled]);

  const validateFiles = (files: File[]) => {
    const validFiles = files.filter((file) => {
      if (maxFileSize && file.size > maxFileSize) {
        setError('file-size-exceeded');
        return false;
      }
      if (accept && !isFileAccepted(file, accept)) {
        setError('file-type-not-supported');
        return false;
      }
      return true;
    });

    if (validFiles.length > 0) {
      setError(null);
      setFiles?.(validFiles);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const selectedFiles = Array.from(event.target.files || []);
    validateFiles(selectedFiles);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    if (disabled) return;
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    if (disabled) return;
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    if (disabled) return;
    event.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(event.dataTransfer.files);
    validateFiles(droppedFiles);
  };

  return {
    isDragging,
    error,
    ref,
    handleFileChange,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
};
