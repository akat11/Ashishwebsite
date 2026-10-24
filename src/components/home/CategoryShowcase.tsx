import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';
import { productCategories, type ProductCategory } from '@/data/categories';

export default function CategoryShowcase() {
  return (
    <section className="bg-white py-18 sm:py-24 border-t border-slate-200/60">
      <div className="container-x">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0fb2ce] mb-2">
              <Layers className="h-3.5 w-3.5" />
              <span>COMPREHENSIVE IMPLANT PORTFOLIO</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight">
              Anatomical Product Categories
            </h2>
            <p className="mt-2.5 max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed">
              Engineered for precision trauma fixation, joint reconstruction, pediatric osteotomies, deformity correction, and emergency limb salvage.
            </p>
          </div>

          <Link
            to="/departments"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-50 px-5 py-2.5 text-sm font-bold text-[#062D56] transition-all hover:bg-[#062D56] hover:text-white shrink-0 shadow-xs"
          >
            <span>Explore Surgical Departments</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 11 Categories Art-Directed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productCategories.map((category: ProductCategory) => (
            <Link
              key={category.slug}
              to={`/products/${category.slug}`}
              className="group rounded-2xl bg-white border border-slate-200 hover:border-[#0875D1] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Category Image Header */}
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062D56]/80 via-transparent to-transparent pointer-events-none" />

                {/* Product Count Pill */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono font-bold border border-white/20">
                  {category.productCount} Implants
                </div>

                {/* Bottom Title on Image Overlay */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-display text-base font-bold text-white drop-shadow-sm leading-snug">
                    {category.name}
                  </h3>
                </div>
              </div>

              {/* Description & Action */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                  {category.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0875D1] group-hover:text-[#062D56] transition-colors">
                  <span>Explore Portfolio</span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0875D1]/10 text-[#0875D1] group-hover:bg-[#0875D1] group-hover:text-white transition-colors">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
