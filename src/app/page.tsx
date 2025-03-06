import { HelloWorld } from '@/components/hello-world';

export default function Home() {
  return (
    <div className="grid min-h-screen place-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <HelloWorld />
    </div>
  );
}
