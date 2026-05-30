const photos = [
  { src: "https://images.pexels.com/photos/6195127/pexels-photo-6195127.jpeg?auto=compress&cs=tinysrgb&w=600", label: "Professional Team" },
  { src: "https://images.pexels.com/photos/6195128/pexels-photo-6195128.jpeg?auto=compress&cs=tinysrgb&w=600", label: "Floor Mopping" },
  { src: "https://images.pexels.com/photos/4107287/pexels-photo-4107287.jpeg?auto=compress&cs=tinysrgb&w=600", label: "Carpet Cleaning" },
  { src: "https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=600", label: "Surface Dusting" },
  { src: "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=600", label: "Floor Sweeping" },
];

export default function GalleryStrip() {
  return (
    <section style={{ background: "#FFFFFF" }} className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-bold tracking-widest uppercase mb-6 text-center"
          style={{ color: "#1FA3A3", fontFamily: "Open Sans, sans-serif" }}>Our Work</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {photos.map(({ src, label }) => (
            <div key={label} className="relative group rounded-xl overflow-hidden aspect-square">
              <img src={src} alt={label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, #0B1F33CC, transparent)" }} />
              <p className="absolute bottom-2 left-0 right-0 text-center text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2"
                style={{ fontFamily: "Open Sans, sans-serif" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
