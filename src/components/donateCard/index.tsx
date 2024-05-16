function DonateCard({ content, color }: { content: string; color: string }) {
  return (
    <div className={`px-12 py-10 bg-[${color}] shadow-md`}>
      <p className="text-gray-100">{content}</p>
    </div>
  );
}

export default DonateCard;
