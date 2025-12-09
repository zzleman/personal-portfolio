export const codeSnippets = [
  {
    language: 'tsx',
    code: `
// Custom Hook: useDebounce with TypeScript generics
import { useState, useEffect } from 'react';
import axios from 'axios';

function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const debouncedSearch = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedSearch) {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      axios
        .get(apiUrl, {
          params: { q: debouncedSearch },
        })
        .then((response) => {
          setSearchResults(response.data);
        })
        .catch((error) => {
          // Error handling in example code
          if (process.env.NODE_ENV === 'development') {
          console.error('Search error:', error);
          }
        });
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearch]);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}
      `,
  },
  {
    language: 'tsx',
    code: `
// API Client: Type-safe service with axios interceptors and error handling
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

type ApiResponse<T> = {
  data: T;
  status: number;
  message?: string;
};

type ApiError = {
  error: string;
  status: number;
  details?: unknown;
};

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      return Promise.reject({
        error: error.response.data || 'Request failed',
        status: error.response.status,
        details: error.response.data,
      });
    }
    return Promise.reject({
      error: error.message || 'Network error',
      status: 500,
    });
  }
);

async function fetchData<T>(
  endpoint: string,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> {
  try {
    const response = await apiClient.get<T>(endpoint, config);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    const apiError = error as ApiError;
    throw {
      error: apiError.error || 'Unknown error',
      status: apiError.status || 500,
      details: apiError.details,
    };
  }
}

const users = await fetchData<User[]>('/users');
      `,
  },
  {
    language: 'tsx',
    code: `
// Next.js 15: Server Actions with TypeScript and form validation
'use server';

import { revalidatePath } from 'next/cache';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export async function submitContactForm(
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  try {
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        message: 'All fields are required',
      };
    }

    const response = await fetch('https://api.example.com/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    revalidatePath('/contact');
    
    return {
      success: true,
      message: 'Form submitted successfully!',
    };
  } catch (error) {
    return {
      success: false,
      message: 'An error occurred. Please try again.',
    };
  }
}
      `,
  },
  {
    language: 'tsx',
    code: `
// React: Performance optimization with useMemo, useCallback, and memo
import { useState, useMemo, useCallback, memo } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface ProductListProps {
  products: Product[];
  onProductSelect: (id: number) => void;
}

const ProductCard = memo(({ product, onClick }: {
  product: Product;
  onClick: (id: number) => void;
}) => {
  return (
    <div
      className="product-card"
      onClick={() => onClick(product.id)}
    >
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
});

export function ProductList({ products, onProductSelect }: ProductListProps) {
  const [filter, setFilter] = useState<string>('all');

  const filteredProducts = useMemo(() => {
    return filter === 'all'
      ? products
      : products.filter(p => p.category === filter);
  }, [products, filter]);

  const handleProductClick = useCallback((id: number) => {
    onProductSelect(id);
  }, [onProductSelect]);

  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>
      
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={handleProductClick}
          />
        ))}
      </div>
    </div>
  );
}
      `,
  },
];

export const bio = {
  language: 'tsx',
  code: `About Me 
   Frontend Developer with 1.5 years of experience specializing in building dynamic, responsive, and user-friendly web applications using React.js, Next.js, and TypeScript. 
   Skilled in creating data-driven UI components, optimizing performance for large datasets, and implementing best practices for accessibility and scalability. 
   Collaborative team player with strong problem-solving skills, focused on delivering high-quality, impactful solutions. 
   Fast learner, always seeking new challenges. 
   Team player, ready to support teammates. 
   Passionate about learning and exploring new opportunities. 
   Most interested in React.js, Next.js and TypeScript. 
   Thank you for reading my bio.`,
};

export const interests = {
  language: 'tsx',
  code: `My Interests: 
  
    🎬 Movies & Series:  
    I absolutely love watching movies and serials! My favorite genres are Thriller and Sci-Fi.  Here are my top 3 favorites:  
    1. Inception
    2. Game of Thrones (ignore the last season :D)  
    3. Eternal Sunshine of Spotless Mind

    🎶 Music:  
    I’m a huge fan of Indie Pop, but I listen to anything that sounds good! Here are the top 3 favorite songs I can’t stop listening to lately:  
    1. "Mirrors" by Justin Timberlake  
    2. "Hayloft II" by Mother Mother
    3. "Stole the show" by Kygo

    💻 Coding:  
    I love coding, and I work most often with React, Next.js, TypeScript, and Tailwind CSS.  
    It doesn’t matter if I write in React or just HTML, CSS, and JS always use Tailwind CSS because it’s my favorite for styling.  
    I'm passionate about building efficient and scalable web applications!
  `,
};

export const education = {
  language: 'tsx',
  code: `Education:
    🎓 Bachelor of Information Technologies, Azerbaijan State Economic University, Baku, Azerbaijan (2021-2025)
    🎓 Fullstack Development, Code Academy (2023)
  `,
};

export const workExperience = {
  language: 'tsx',
  code: `Work Experience:
    💼 DevelopsToday – Poland
    Frontend Developer (02.2025 - present)
    Job Responsibilities:
    - Developing and maintained client-facing web applications using React.js and TypeScript.
    - Building and integrated dynamic charts and visualizations for analytics dashboards.
    Key Achievements:
    - Reduced data table rendering time by 40% for large datasets (>100,000 records).
    - Successfully delivered multiple high-traffic client projects on time.

    💼 RAM Holding – Azerbaijan
    Web Developer (01.2025 – 07.2025)
    Job Responsibilities:
    - Developing and enhanced internal management systems for the company and its subsidiaries.
    - Building automated integration to transfer candidate data from job applications directly into the management system.
    Key Achievements:
    - Streamlined recruitment workflow by automating data flow between website and management system.
    - Reduced manual data entry time by 60%.

    💼 IR Mater Group – Azerbaijan
    Frontend Developer (03.2024 – 12.2024)
    Job Responsibilities:
    - Designing and developed a responsive multi-language corporate website using React.js.
    - Implementing internationalization (i18n) for multilingual support.
    Key Achievements:
    - Successfully launched the company's first multilingual website and reduced manual data entry time by 60%.
    - Reduced bounce rate through improved navigation and UI design.
  `,
};

export const getContactFormSnippet = (
  name: string | undefined,
  email: string | undefined,
  message: string | undefined
) => {
  const escapeString = (str: string | undefined): string => {
    if (!str) return '';
    return str
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'")
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/\t/g, '\\t');
  };

  const safeName = escapeString(name || '');
  const safeEmail = escapeString(email || '');
  const safeMessage = escapeString(message || '');
  const date = new Date().toDateString();

  return {
    language: 'tsx',
    code: `
  const button = document.querySelector('#sendBtn');

  const message = {
    name: '${safeName}',
    email: '${safeEmail}',
    message: '${safeMessage}',
    date: '${date}'
  };  

  button.addEventListener('click', () => {
    form.send(message);
  });
  `,
  };
};
