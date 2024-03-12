import ProductList from '@/components/home-page/productList/ProductList';
import { getProductList } from '@/lib/serverActions';

export default async function Home() {
  const productList = await getProductList();

  return (
    <main className="min-h-[calc(100vh-48px)] bg-gray-100">
      <ProductList productList={productList} />
    </main>
  );
}
