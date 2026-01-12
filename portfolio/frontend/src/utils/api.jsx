const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// Simple in-memory cache with TTL (Time To Live)
const cache = new Map();

const getCachedData = (key) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < 300000) { // 5 minutes TTL
    return cached.data;
  }
  cache.delete(key);
  return null;
};

const setCachedData = (key, data) => {
  cache.set(key, {
    data,
    timestamp: Date.now()
  });
};

// Fetch portfolio data
export const fetchPortfolioData = async () => {
  const cached = getCachedData('portfolio');
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/portfolio`, {
      headers: {
        'Cache-Control': 'no-cache'
      }
    });
    if (!response.ok) {
      throw new Error("Failed to fetch portfolio data");
    }
    const data = await response.json();
    setCachedData('portfolio', data);
    return data;
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    // Return cached data if available even if expired, as fallback
    const fallback = cache.get('portfolio');
    if (fallback) return fallback.data;
    throw error;
  }
};

// Fetch projects data
export const fetchProjectsData = async () => {
  const cached = getCachedData('projects');
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/projects`, {
      headers: {
        'Cache-Control': 'no-cache'
      }
    });
    if (!response.ok) {
      throw new Error("Failed to fetch projects data");
    }
    const data = await response.json();
    setCachedData('projects', data);
    return data;
  } catch (error) {
    console.error("Error fetching projects data:", error);
    const fallback = cache.get('projects');
    if (fallback) return fallback.data;
    throw error;
  }
};

// Fetch experience data
export const fetchExperienceData = async () => {
  const cached = getCachedData('experience');
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/experience`, {
      headers: {
        'Cache-Control': 'no-cache'
      }
    });
    if (!response.ok) {
      throw new Error("Failed to fetch experience data");
    }
    const data = await response.json();
    setCachedData('experience', data);
    return data;
  } catch (error) {
    console.error("Error fetching experience data:", error);
    const fallback = cache.get('experience');
    if (fallback) return fallback.data;
    throw error;
  }
};

// Fetch certifications data
export const fetchCertificationsData = async () => {
  const cached = getCachedData('certifications');
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/certifications`, {
      headers: {
        'Cache-Control': 'no-cache'
      }
    });
    if (!response.ok) {
      throw new Error("Failed to fetch certifications data");
    }
    const data = await response.json();
    setCachedData('certifications', data);
    return data;
  } catch (error) {
    console.error("Error fetching certifications data:", error);
    const fallback = cache.get('certifications');
    if (fallback) return fallback.data;
    throw error;
  }
};

// Fetch testimonials data
export const fetchTestimonialsData = async () => {
  const cached = getCachedData('testimonials');
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/testimonials`, {
      headers: {
        'Cache-Control': 'no-cache'
      }
    });
    if (!response.ok) {
      throw new Error("Failed to fetch testimonials data");
    }
    const data = await response.json();
    setCachedData('testimonials', data);
    return data;
  } catch (error) {
    console.error("Error fetching testimonials data:", error);
    const fallback = cache.get('testimonials');
    if (fallback) return fallback.data;
    throw error;
  }
};

// Fetch articles data
export const fetchArticlesData = async () => {
  const cached = getCachedData('articles');
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/articles`, {
      headers: {
        'Cache-Control': 'no-cache'
      }
    });
    if (!response.ok) {
      throw new Error("Failed to fetch articles data");
    }
    const data = await response.json();
    setCachedData('articles', data);
    return data;
  } catch (error) {
    console.error("Error fetching articles data:", error);
    const fallback = cache.get('articles');
    if (fallback) return fallback.data;
    throw error;
  }
};

// Fetch services data
export const fetchServicesData = async () => {
  const cached = getCachedData('services');
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/services`, {
      headers: {
        'Cache-Control': 'no-cache'
      }
    });
    if (!response.ok) {
      throw new Error("Failed to fetch services data");
    }
    const data = await response.json();
    setCachedData('services', data);
    return data;
  } catch (error) {
    console.error("Error fetching services data:", error);
    const fallback = cache.get('services');
    if (fallback) return fallback.data;
    throw error;
  }
};

// Submit contact form
export const submitContactForm = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to submit contact form");
    }
    return await response.json();
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};

// Subscribe to newsletter
export const subscribeToNewsletter = async (email) => {
  try {
    const response = await fetch(`${API_BASE_URL}/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (!response.ok) {
      throw new Error("Failed to subscribe to newsletter");
    }
    return await response.json();
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    throw error;
  }
};

// Get newsletter subscribers (admin only)
export const getNewsletterSubscribers = async (token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/newsletter`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch newsletter subscribers");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching newsletter subscribers:", error);
    throw error;
  }
};

