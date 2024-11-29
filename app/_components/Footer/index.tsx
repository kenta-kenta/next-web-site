export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto">
        <ul className="flex justify-center space-x-8">
          <li>
            <a href="/news" className="hover:underline">
              ニュース
            </a>
          </li>
          <li>
            <a href="/members" className="hover:underline">
              メンバー
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              お問い合わせ
            </a>
          </li>
        </ul>
      </nav>
      <p className="text-center mt-4 text-sm text-gray-400">
        © SIMPLE. All Rights Reserved 2024
      </p>
    </footer>
  );
}
