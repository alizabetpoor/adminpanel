import "./TableOrders.css";
const TableOrders = () => {
  const datas = [
    {
      product: "دوربین",
      username: "علی ضابط پور",
      priceproduct: 4000,
      countproduct: 2,
    },
    {
      product: "لپتاپ",
      username: "علی ضابط پور",
      priceproduct: 3000,
      countproduct: 5,
    },
    {
      product: "موبایل",
      username: "حسین امیری",
      priceproduct: 6000,
      countproduct: 3,
    },
    {
      product: "دوربین",
      username: "علی ضابط پور",
      priceproduct: 4000,
      countproduct: 2,
    },
    {
      product: "دوربین",
      username: "علی ضابط پور",
      priceproduct: 2000,
      countproduct: 4,
    },
  ];
  return (
    <table className="tableorders rounded-md w-full ">
      <thead className="">
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>نام کالا</th>
          <th>نام خریدار</th>
          <th>قیمت کالا</th>
          <th>تعداد کالا</th>
          <th>جمع مبلغ</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((data, index) => {
          return (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{data.product}</td>
              <td>{data.username}</td>
              <td>{data.priceproduct}</td>
              <td>{data.countproduct}</td>
              <td>{data.priceproduct * data.countproduct}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableOrders;
