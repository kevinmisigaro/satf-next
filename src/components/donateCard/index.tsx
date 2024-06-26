function DonateCard({ content, cols }: { content: string; cols: string }) {
  return (
    <div style={{
      backgroundColor: cols
    }} className={`px-12 py-10 shadow-md`}>
      <p className="text-gray-100">{content}</p>
    </div>
  );
}

export default DonateCard;
