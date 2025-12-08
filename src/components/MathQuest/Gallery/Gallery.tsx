import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

type TabType = 'round1' | 'finale' | 'launch';

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

interface GalleryImageWithSize extends GalleryImage {
  size: 'small' | 'medium' | 'large' | 'wide' | 'tall';
}

const galleryData: Record<TabType, GalleryImageWithSize[]> = {
  round1: [
    { id: 1, url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Team collaboration', size: 'large' },
    { id: 2, url: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Creative workspace', size: 'medium' },
    { id: 3, url: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Innovation meeting', size: 'small' },
    { id: 4, url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Brainstorming session', size: 'wide' },
    { id: 5, url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Team presentation', size: 'tall' },
    { id: 6, url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Workshop', size: 'medium' },
    { id: 19, url: 'https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Team work', size: 'small' },
    { id: 20, url: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Planning', size: 'medium' },
  ],
  finale: [
    { id: 7, url: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Celebration moment', size: 'wide' },
    { id: 8, url: 'https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Victory celebration', size: 'small' },
    { id: 9, url: 'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Grand event', size: 'large' },
    { id: 10, url: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Achievement ceremony', size: 'tall' },
    { id: 11, url: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Awards night', size: 'medium' },
    { id: 12, url: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Final showcase', size: 'small' },
    { id: 21, url: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Success', size: 'medium' },
    { id: 22, url: 'https://images.pexels.com/photos/1181604/pexels-photo-1181604.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Victory', size: 'wide' },
  ],
  launch: [
    { id: 13, url: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Product reveal', size: 'tall' },
    { id: 14, url: 'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Launch event', size: 'large' },
    { id: 15, url: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Product demonstration', size: 'small' },
    { id: 16, url: 'https://images.pexels.com/photos/3183164/pexels-photo-3183164.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Launch presentation', size: 'medium' },
    { id: 17, url: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'New product showcase', size: 'wide' },
    { id: 18, url: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Launch celebration', size: 'small' },
    { id: 23, url: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Innovation', size: 'medium' },
    { id: 24, url: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Presentation', size: 'tall' },
  ],
};

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<TabType>('round1');

  const tabs = [
    { id: 'round1' as TabType, label: 'Round 1' },
    { id: 'finale' as TabType, label: 'Grand Finale' },
    { id: 'launch' as TabType, label: 'Product Launch' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Event Gallery</h1>
              <p className="text-sm text-gray-600 mt-1">Capturing memorable moments</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 overflow-x-auto pb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium text-sm whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'text-gray-900 border-b-2 border-green-400'
                    : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[200px] gap-4">
          {galleryData[activeTab].map((image, index) => {
            const sizeClasses = {
              small: 'col-span-1 row-span-1',
              medium: 'col-span-2 row-span-1',
              large: 'col-span-2 row-span-2',
              wide: 'col-span-2 md:col-span-3 row-span-1',
              tall: 'col-span-1 row-span-2',
            };

            return (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-2xl bg-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer ${sizeClasses[image.size]}`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-medium text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600 font-medium">
              {galleryData[activeTab].length} photos in {tabs.find(t => t.id === activeTab)?.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
