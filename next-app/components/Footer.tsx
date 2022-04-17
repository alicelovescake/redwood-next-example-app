export default function Footer() {
  return (
    <footer className="relative p-10 mr-20">
      <div className="absolute bottom-0 w-full text-center text-brand-green-dark h-2 py-10">
        Directed by: 🎬{" "}
        <a
          target="_blank"
          className="text-brand-green hover:text-brand-green-light font-bold"
          href="https://alicezhao.com"
        >
          Alice Zhao
        </a>
      </div>
    </footer>
  );
}
