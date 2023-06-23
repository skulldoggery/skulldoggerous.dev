import { createSignal, Suspense } from 'solid-js';

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <section class="bg-gray-100 text-gray-700 p-8">
      <Suspense fallback={<div>Digging...</div>}>
      </Suspense>
    </section>
  );
}
