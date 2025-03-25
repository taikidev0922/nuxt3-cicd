interface Product {
  productId: string;
  productName: string;
  unitPrice: number;
}

const mockProducts: Product[] = [
  {
    productId: "P001",
    productName: "ノートパソコン",
    unitPrice: 98000,
  },
  {
    productId: "P002",
    productName: "デスクトップPC",
    unitPrice: 158000,
  },
  {
    productId: "P003",
    productName: "ワイヤレスマウス",
    unitPrice: 3980,
  },
  {
    productId: "P004",
    productName: "メカニカルキーボード",
    unitPrice: 12800,
  },
  {
    productId: "P005",
    productName: "4Kモニター",
    unitPrice: 45800,
  },
];

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const limit = Number(query.limit) || 20;
  const offset = Number(query.offset) || 0;

  const items = mockProducts.slice(offset, offset + limit);

  return {
    total: mockProducts.length,
    items,
  };
});
