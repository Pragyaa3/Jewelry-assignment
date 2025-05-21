export default function ImageGallery({ selectedInitial, selectedColor }) {
  const fileName =
    selectedColor === 'Silver'
      ? `${selectedInitial}-S.jpg`
      : `${selectedInitial}.jpg`;

  const imageSrc = `/images/pendants/${fileName}`;

  return (
    <div className="w-full h-auto">
      <img
        src={imageSrc}
        alt={`Pendant ${selectedInitial} in ${selectedColor}`}
        className="w-full rounded-2xl object-cover shadow-md"
      />
    </div>
  );
}
