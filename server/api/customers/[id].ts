interface Customer {
  customerId: string;
  customerName: string;
  address: string;
}

const mockCustomers: Customer[] = [
  {
    customerId: "C001",
    customerName: "株式会社テスト",
    address: "東京都渋谷区テスト1-1-1",
  },
  {
    customerId: "C002",
    customerName: "株式会社サンプル",
    address: "大阪府大阪市サンプル2-2-2",
  },
  {
    customerId: "C003",
    customerName: "テスト商事株式会社",
    address: "福岡県福岡市テスト3-3-3",
  },
];

export default defineEventHandler((event) => {
  const id = getRouterParam(event, "id");
  const customer = mockCustomers.find((c) => c.customerId === id);

  if (!customer) {
    throw createError({
      statusCode: 404,
      message: "顧客が見つかりません",
    });
  }

  return customer;
});
