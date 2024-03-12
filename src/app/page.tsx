import ProductList from '@/components/home-page/productList/ProductList';

export default async function Home() {
  return (
    <main className="min-h-[calc(100vh-48px)] bg-gray-100">
      <ProductList />
    </main>
  );
}
