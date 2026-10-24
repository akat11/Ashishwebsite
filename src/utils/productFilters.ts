import type { Product } from '@/data/products';

export type ProductSortOption = 'featured' | 'name-asc' | 'name-desc' | 'name-ascending' | 'name-descending';

export interface FilterProductsParams {
  products: Product[];
  category?: string;
  material?: string;
  searchQuery?: string;
  sortBy?: ProductSortOption;
}

/**
 * Pure function to filter a list of products by category, material, and search query.
 */
export function filterProducts({
  products,
  category = 'all',
  material = 'all',
  searchQuery = '',
  sortBy = 'featured',
}: FilterProductsParams): Product[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const normalizedMaterial = material.trim().toLowerCase();

  const filtered = products.filter((product) => {
    if (!product) return false;

    // 1. Category Filter
    if (category !== 'all' && product.category !== category) {
      return false;
    }

    const specs = Array.isArray(product.specs) ? product.specs : [];

    // 2. Material Filter
    if (normalizedMaterial !== 'all') {
      const matSpec = specs.find((s) => s?.label && s.label.toLowerCase().includes('material'));
      const descAndSpecs = [
        matSpec?.value || '',
        product.description || '',
        ...specs.map((s) => `${s?.label || ''} ${s?.value || ''}`),
      ]
        .join(' ')
        .toLowerCase();

      if (normalizedMaterial.includes('titanium')) {
        const isTi =
          descAndSpecs.includes('titanium') ||
          descAndSpecs.includes('ti-6al-4v') ||
          descAndSpecs.includes('gr.5') ||
          descAndSpecs.includes('grade 5') ||
          descAndSpecs.includes('tt gr.5');
        if (!isTi) return false;
      } else if (
        normalizedMaterial.includes('stainless') ||
        normalizedMaterial.includes('steel') ||
        normalizedMaterial.includes('316l')
      ) {
        const isSS =
          descAndSpecs.includes('stainless') ||
          descAndSpecs.includes('steel') ||
          descAndSpecs.includes('316l') ||
          descAndSpecs.includes('ss316l') ||
          descAndSpecs.includes('ss 316');
        if (!isSS) return false;
      } else if (!descAndSpecs.includes(normalizedMaterial)) {
        return false;
      }
    }

    // 3. Search Query Filter (searches across name, description, category slug, specifications, catalogue codes, hole count, and clinical indications)
    if (normalizedQuery) {
      const searchTerms = normalizedQuery.split(/\s+/).filter(Boolean);
      const searchableBlob = [
        product.name || '',
        product.description || '',
        product.category || '',
        product.slug || '',
        ...specs.map((s) => `${s?.label || ''} ${s?.value || ''}`),
      ]
        .join(' ')
        .toLowerCase();

      const matchesAllTerms = searchTerms.every((term) => searchableBlob.includes(term));
      if (!matchesAllTerms) return false;
    }

    return true;
  });

  return sortProducts(filtered, sortBy);
}

/**
 * Pure function to sort products according to chosen sort criteria.
 */
export function sortProducts(products: Product[], sortBy: ProductSortOption = 'featured'): Product[] {
  if (sortBy === 'name-asc' || sortBy === 'name-ascending') {
    return [...products].sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortBy === 'name-desc' || sortBy === 'name-descending') {
    return [...products].sort((a, b) => b.name.localeCompare(a.name));
  }
  if (sortBy === 'featured') {
    return [...products].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }
  return products;
}
