// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export const Clients = () => {
//   const clients = [
//     {
//       logo: "https://logodownload.org/wp-content/uploads/2014/07/suzano-logo-0.png",
//       name: "Suzano",
//     },
//     {
//       logo: "https://logospng.org/download/eletrobras/logo-eletrobras-2048.png",
//       name: "Petrobras",
//     },
//     {
//       logo: "https://humanhand.org/sites/default/files/styles/large/public/2021-11/basf%20empresa%20amiga%20human%20hand%20org.png?itok=0WaRIn2g",
//       name: "BASF",
//     },
//     {
//       logo: "https://logospng.org/download/engie/logo-engie-2048.png",
//       name: "Engie",
//     },
//     {
//       logo: "https://logodownload.org/wp-content/uploads/2014/05/vale-logo-0.png",
//       name: "Vale",
//     },
//     {
//       logo: "https://cdn.worldvectorlogo.com/logos/siemens-3.svg",
//       name: "Siemens",
//     },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center text-primary mb-12 animate-fade-down">
//           Principais Clientes
//         </h2>

//         <Carousel
//           className="w-full relative overflow-hidden"
//           opts={{
//             slidesToScroll: 1,
//             loop: true,
//             align: "start",
//           }}
//         >
//           <CarouselContent>
//             {clients.map((client) => (
//               <CarouselItem
//                 key={client.name}
//                 className="w-full md:basis-1/4 shrink-0 grow-0"
//               >
//                 <div
//                   key={client.name}
//                   className="group relative h-44 overflow-hidden animate-fade-up mx-4"
//                 >
//                   <img
//                     src={client.logo}
//                     alt={client.name}
//                     className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
//                   />
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10" />
//           <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10" />
//         </Carousel>
//       </div>
//     </section>
//   );
// };
