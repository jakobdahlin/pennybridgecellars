import Link from "next/link"
import Image from "next/image"
import { Grape, MapPin, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
          <img src="/PC_ID.jpg" className="w-[70px]"/>
          <span className="text-xl">Pennybridge Cellars</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-md hover:text-lime-600 transition-colors">
              Our Wines
            </Link>
            <Link href="#" className="text-md hover:text-lime-600 transition-colors">
              Vineyard
            </Link>
            <Link href="#" className="text-md hover:text-lime-600 transition-colors">
              Tastings
            </Link>
            <Link href="#" className="text-md hover:text-lime-600 transition-colors">
              Visit Us
            </Link>
            <Button variant="outline" className="rounded-full border-lime-600 text-lime-600 hover:bg-lime-50 text-md">
              Join Club
            </Button>
          </nav>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-gray-900">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white border-gray-200">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="#" className="text-lg hover:text-lime-600 transition-colors">
                  Our Wines
                </Link>
                <Link href="#" className="text-lg hover:text-lime-600 transition-colors">
                  Vineyard
                </Link>
                <Link href="#" className="text-lg hover:text-lime-600 transition-colors">
                  Tastings
                </Link>
                <Link href="#" className="text-lg hover:text-lime-600 transition-colors">
                  Visit Us
                </Link>
                <Button variant="outline" className="border-lime-600 text-lime-600 hover:bg-rose-50 
                w-full mt-4 text-md rounded-full">
                  Join Club
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh]">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="/Wine6.jpeg"
            alt="Vineyard at sunset"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-serif max-w-2xl text-white">
              Crafting Exceptional Wines in the Heart of Napa Valley
            </h1>
            <p className="mt-4 max-w-xl text-gray-100">
              Experience the rich heritage and exquisite flavors of our estate-grown wines, cultivated with passion and
              precision in California's premier wine region.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="bg-lime-600 hover:bg-lime-600/80 rounded-full text-white">Explore Our Collection</Button>
              <Button variant="outline" className="border-white text-black rounded-full
              hover:bg-white/80">
                Book a Tasting
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Wines */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif">Our Signature Wines</h2>
              <div className="w-20 h-1 bg-lime-600 mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Cabernet Sauvignon",
                  year: "2025",
                  description: "Bold and structured with notes of blackcurrant, cedar, and dark chocolate.",
                  price: "$82",
                },
                {
                  name: "Chardonnay",
                  year: "2025",
                  description: "Elegant and balanced with hints of apple, pear, and subtle oak influence.",
                  price: "$54",
                },
                {
                  name: "Sauvignon Blanc",
                  year: "2025",
                  description: "Silky and complex with aromas of cherry, raspberry, and earthy undertones.",
                  price: "$44",
                },
              ].map((wine, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm 
                  hover:shadow-md transition-shadow group"
                >
                  <div className="aspect-[4/4] relative mb-4 overflow-hidden rounded-md">
                  <Image
                  src={`/grape${index + 1}.jpg`}
                  alt={wine.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  </div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-bold font-serif">{wine.name}</h3>
                    <span className="text-lime-600">{wine.year}</span>
                  </div>
                  <p className="text-gray-600 text-md mb-4">{wine.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-lg">{wine.price}</span>
                    <Button variant="ghost" className="text-lime-600 hover:text-lime-600 hover:bg-lime-50 text-md p-0">
                      View Details →
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" className="border-neutral-200 text-black rounded-full
              hover:bg-white/80 hover:border-neutral-400">
                View All Wines
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-full overflow-hidden aspect-[4/4]">
                <Image
                  src="/Wine7.jpeg"
                  alt="Vineyard landscape"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-serif mb-6">Our Heritage</h2>
                <div className="w-20 h-1 bg-lime-600 mb-6"></div>
                <p className="text-gray-700 mb-4">
                  Founded in 1978, Pennybridge Cellars has been crafting exceptional wines for over four decades. Our
                  200-acre estate is nestled in the heart of Napa Valley, where the unique terroir and Mediterranean
                  climate create the perfect conditions for growing world-class grapes.
                </p>
                <p className="text-gray-700 mb-6">
                  We combine time-honored traditions with innovative techniques to produce wines that express the
                  distinctive character of our land. Our commitment to sustainable farming practices ensures that our
                  vineyards will continue to thrive for generations to come.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-2">
                    <Grape className="h-7 w-7 text-lime-600" />
                    <span className="text-sm">Sustainable Farming</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-7 w-7 text-lime-600" />
                    <span className="text-sm">Napa Valley, CA</span>
                  </div>
                </div>
                <Button className="mt-8 bg-lime-600 hover:bg-lime-600/80 rounded-full text-white text-md">Learn Our Story</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Visit Us */}
        <section className="py-20 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-lime-600/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-serif mb-4 text-black">Visit Our Estate</h2>
              <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-black mb-8">
                Experience the beauty of our vineyard with a personalized tasting experience. Tour our cellars, learn
                about our winemaking process, and enjoy our wines in their natural setting with breathtaking views of
                the Napa Valley.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white/90 p-6 rounded-xl shadow-xl">
                  <h3 className="text-xl font-serif mb-2 text-gray-900">Estate Tasting</h3>
                  <p className="text-gray-600 text-sm mb-2">Sample our signature collection with expert guidance</p>
                  <p className="text-lime-600 font-medium">$45 per person</p>
                </div>
                <div className="bg-white/90 p-6 rounded-xl shadow-xl">
                  <h3 className="text-xl font-serif mb-2 text-gray-900">Reserve Experience</h3>
                  <p className="text-gray-600 text-sm mb-2">Private tasting of our limited production wines</p>
                  <p className="text-lime-600 font-medium">$85 per person</p>
                </div>
                <div className="bg-white/90 p-6 rounded-xl shadow-xl">
                  <h3 className="text-xl font-serif mb-2 text-gray-900">Vineyard Tour</h3>
                  <p className="text-gray-600 text-sm mb-2">Guided tour of the estate with premium tasting</p>
                  <p className="text-lime-600 font-medium">$120 per person</p>
                </div>
              </div>
              <Button className="bg-white border-neutral-200 text-black rounded-full shadow-xl
              hover:bg-white/80 hover:border-neutral-400 text-md">Book Your Experience</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
            <Link href="/" className="flex items-center gap-2">
          <img src="/PC_ID.jpg" className="w-[70px]"/>
          <span className="text-xl">Pennybridge Cellars</span>
          </Link>
              <p className="mt-4 text-gray-600 text-md">
                Crafting exceptional wines in the heart of Napa Valley since 1978.
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold uppercase tracking-wider mb-4">Explore</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-lime-600 text-md">
                    Our Wines
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-lime-600 text-md">
                    Vineyard
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-lime-600 text-md">
                    Tastings
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-lime-600 text-md">
                    Wine Club
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold uppercase tracking-wider mb-4">Visit</h4>
              <address className="not-italic text-gray-600 text-md">
                1234 Vineyard Lane
                <br />
                Napa, CA 94558
                <br />
                <Link href="tel:+17075551234" className="hover:text-lime-600 text-md">
                  +1 (707) 555-1234
                </Link>
                <br />
                <Link href="mailto:info@pennybridgecellars.com" className="hover:text-lime-600 text-md">
                  info@pennybridgecellars.com
                </Link>
              </address>
            </div>
            <div>
              <h4 className="text-md font-semibold uppercase tracking-wider mb-4">Newsletter</h4>
              <p className="text-gray-600 text-md mb-4">
                Subscribe to receive updates on new releases, events, and special offers.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white border border-gray-300 rounded px-3 py-2 text-md flex-1 focus:outline-none focus:ring-1 focus:ring-rose-500"
                />
                <Button size="sm" className="bg-lime-600 hover:bg-lime-600/80 mx-2 rounded-full text-white text-md">
                  Sign Up
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-md">
              © {new Date().getFullYear()} Pennybridge Cellars. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-600 hover:text-lime-600">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-lime-600">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

