"use client";

import TiltedCard from "../React-bits/TiltedCard";

interface TiltedCardWrapperProps {
  imageSrc: string;
  altText?: string;
  captionText?: string;
  containerHeight?: string;
  containerWidth?: string;
  imageHeight?: string;
  imageWidth?: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
}

export default function index({
  imageSrc,
  altText = "Imagem",
  captionText = "",
  containerHeight = "150px",
  containerWidth = "100%",
  imageHeight = '10vw',
  imageWidth = '10vw',
  rotateAmplitude = 35,
  scaleOnHover = 1.10,
  showMobileWarning = false,
  showTooltip = true,
}: TiltedCardWrapperProps) {
  return (
    <div className="w-full">
      <TiltedCard
        imageSrc={imageSrc}
        altText={altText}
        captionText={captionText}
        containerHeight={containerHeight}
        containerWidth={containerWidth}
        imageHeight={imageHeight}
        imageWidth={imageWidth}
        rotateAmplitude={rotateAmplitude}
        scaleOnHover={scaleOnHover}
        showMobileWarning={showMobileWarning}
        showTooltip={showTooltip}
      />
    </div>
  );
}
