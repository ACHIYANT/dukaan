import DataCol from "./DataCol";
const currency = "INR";
function currencyFormat(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency,
  }).format(value);
}
export default function DataDisplay({ data }) {
  return (
    <div className="flex w-full h-[48px] py-3.5 px-3 justify-between items-center bg-white">
      <DataCol>
        <span className="text-primaryBlue">#{data.orderId}</span>
      </DataCol>
      <DataCol>
        {data.status && (
          <span
            className={`h-[10px] w-[10px] rounded-full bg-[#17B31B] ${
              data.status == "Successful"
                ? "bg-[#17B31B]"
                : data.status == "Processing"
                ? "bg-[#999]"
                : "bg-red-800"
            }`}
          ></span>
        )}
        <span className="text-primaryBlue">{data.status}</span>
      </DataCol>
      <DataCol>
        <span className="text-primaryBlue">{data.transactionId}</span>
      </DataCol>
      <DataCol isLast={false}>
        <span className="text-primaryBlue">{data.date}</span>
      </DataCol>
      <DataCol isLast={true}>
        <span className="text-primaryBlue self-end">{currencyFormat(data.amount)}</span>
      </DataCol>
    </div>
  );
}
