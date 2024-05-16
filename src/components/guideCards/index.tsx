function GuideCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <img src={image} className="w-40" />
      <p className="max-w-sm text-center">{title}</p>
    </div>
  );
}

export default GuideCard;
