import Navbar from "./components/Navbar";

import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />

      <div>
        <div class="flex relative h-full py-20 bg-white">
          <div class="w-1/3 lg:flex hidden items-center justify-center">
            <img
              src="/logo512.png"
              alt="Krissaco"
              class="w-[256px] h-auto object-cover"
            />
          </div>
          <div class="lg:w-2/3 w-full flex z-10 items-center text-justify justify-center px-5 md:px-20">
            <div>
              <h1 class="text-4xl font-bold mb-4 text-center">Krissaco</h1>
              <p class="text-lg text-gray-900 pb-5">
                At Kirssaco, we are committed to driving innovation in the
                agritech and food industries. Our goal is to create premium food
                brands and cutting-edge agricultural technology that enhance
                both consumer experiences and farming efficiency.
              </p>
              <p class="text-lg text-gray-900 pb-5">
                Kirssaco Urban Brews, our flagship coffee brand, leads the way
                with unique offerings like our signature vanilla-flavored black
                coffee, delivering quality and bold flavors for the modern,
                urban consumer.
              </p>
              <p class="text-lg text-gray-900 pb-5">
                In addition to coffee, Kirssaco is at the forefront of food
                processing innovation with Sleek—our advanced software designed
                for optimizing food processing efficiency. Sleek helps
                businesses monitor and improve productivity, acting as an
                essential partner in streamlining operations and maximizing
                output.
              </p>
              <p class="text-lg text-gray-900 pb-5">
                We are also expanding into new food brands and pioneering
                agritech solutions that revolutionize farming and food
                processing. Our IoT-powered technologies are crafted to make
                agriculture smarter, more sustainable, and more efficient,
                bridging the gap between tradition and innovation.
              </p>
              <p class="text-lg text-gray-900 pb-0">
                At Kirssaco, we blend expertise in food and agritech to shape
                the future of agriculture, food production, and consumer
                experiences.
              </p>
            </div>
          </div>
          <div class="absolute lg:hidden right-1 bottom-1 opacity-40 block items-center justify-center">
            <img
              src="/logo512.png"
              alt="Krissaco"
              class="w-[256px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
