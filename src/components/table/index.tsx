function Table({ list }: { list: string[] }) {
  return (
    <table className="table-fixed my-5">
      <tbody>
        {list.map((l, i) => (
          <tr className="border border-gray-300 border-2" key={i}>
            <td className="p-2">
              <div
                dangerouslySetInnerHTML={{
                  __html: l,
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
