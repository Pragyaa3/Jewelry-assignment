export default function Footer() {
  return (
    <footer className="text-sm">
      {/* Top Light Grey Box Section */}
      <div className="bg-gray-100 text-black px-6 py-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold mb-2">Elevate your fashion game</h2>
            <p className="mb-4">
              Sign up for our email newsletter and GET 10% OFF. It's like having a stylish BFF. Opt out any time.
            </p>
            <p className="mb-2 underline cursor-pointer">Privacy policy</p>
            <p className="font-semibold mb-2">Get in the know: sign up for our newsletter.</p>
            <div className="flex gap-2 mb-4 max-w-md">
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="px-4 py-2 text-black rounded w-full border border-gray-300"
              />
              <button className="bg-black text-white px-4 py-2 rounded">Sign up</button>
            </div>
            <p className="font-semibold">Help Us Improve</p>
            <p className="underline cursor-pointer mb-4">Take a brief survey about today's visit.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Get REVOLVE on the go</p>
            <p className="underline cursor-pointer">Download our super easy-to-use app available for your iPhone, iPad and Android.</p>
            <p className="underline cursor-pointer mt-2">Download the iPhone/iPad app</p>
          </div>
        </div>
      </div>

      {/* Middle Black Background Section */}
      <div className="bg-black text-white px-6 py-10 border-t border-white/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold mb-2">Customer Care</h3>
            <ul className="space-y-1 text-gray-300">
              <li>Contact Us</li>
              <li>+1-562-926-5672</li>
              <li>Payment Options</li>
              <li>FAQs</li>
              <li>Track Your Order</li>
              <li>Shipping & Delivery</li>
              <li>Returns & Exchanges</li>
              <li>Size Guide</li>
              <li>Gifting REVOLVE</li>
              <li>Why REVOLVE</li>
              <li>Feedback</li>
              <li>Accessibility</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Information</h3>
            <ul className="space-y-1 text-gray-300">
              <li>About Us</li>
              <li>Stores</li>
              <li>Social Impact</li>
              <li>Careers</li>
              <li>Ambassadors</li>
              <li>Affiliate</li>
              <li>Investors</li>
              <li>Press</li>
              <li>Bellemint</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Connect</h3>
            <ul className="space-y-1 text-gray-300">
              <li>TikTok</li>
              <li>YouTube</li>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Line Section */}
      <div className="bg-black text-white text-center py-6 border-t border-white/20">
        <p className="text-xs mb-2">
          2025 © Eminent, Inc. (a Revolve Group company). All Rights Reserved.
        </p>
        <p className="space-x-4 text-xs">
          <span className="underline cursor-pointer">TERMS</span>
          <span className="underline cursor-pointer">PRIVACY</span>
          <span className="underline cursor-pointer">COOKIE PREFERENCES</span>
          <span className="underline cursor-pointer">CA Privacy Rights</span>
          <span className="underline cursor-pointer">CA Transparency Act</span>
          <span className="underline cursor-pointer">Your Privacy Choices</span>
        </p>
      </div>
    </footer>
  );
}
