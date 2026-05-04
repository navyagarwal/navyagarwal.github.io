import { useState } from 'react';
import { X } from 'lucide-react';

type GalleryItem = {
  id: number;
  type: 'me' | 'paintings';
  title: string;
  date: string;
  description?: string;
  imageUrl: string;
  width: number;
  height: number;
};

export function Gallery() {
  const [filter, setFilter] = useState<'me' | 'paintings'>('me');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: 'paintings',
      title: 'Bird on Branch',
      date: '2024-03-15',
      description: 'Watercolor painting inspired by nature',
      imageUrl: 'https://images.unsplash.com/photo-1703587820568-9fe0321a592e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBwYWludGluZyUyMHdhdGVyY29sb3IlMjBhYnN0cmFjdHxlbnwxfHx8fDE3Nzc4NzY0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      width: 6000,
      height: 4379,
    },
    {
      id: 2,
      type: 'me',
      title: 'Portrait',
      date: '2024-02-28',
      description: 'A moment captured',
      imageUrl: 'https://images.unsplash.com/photo-1686044905964-f0c1e55be7ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwb3J0cmFpdCUyMGNyZWF0aXZlJTIwYXJ0aXN0aWN8ZW58MXx8fHwxNzc3ODc2NDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      width: 4016,
      height: 6016,
    },
    {
      id: 3,
      type: 'paintings',
      title: 'Abstract Landscape',
      date: '2024-01-10',
      description: 'Earthy tones and textures',
      imageUrl: 'https://images.unsplash.com/photo-1750327324364-6700eab9ad7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhcnQlMjBwYWludGluZyUyMHdhdGVyY29sb3IlMjBhYnN0cmFjdHxlbnwxfHx8fDE3Nzc4NzY0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      width: 4774,
      height: 3066,
    },
    {
      id: 4,
      type: 'me',
      title: 'Green Day',
      date: '2023-12-05',
      imageUrl: 'https://images.unsplash.com/photo-1616240935766-3ae6a1009f7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwZXJzb24lMjBwb3J0cmFpdCUyMGNyZWF0aXZlJTIwYXJ0aXN0aWN8ZW58MXx8fHwxNzc3ODc2NDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      width: 7360,
      height: 4912,
    },
    {
      id: 5,
      type: 'paintings',
      title: 'Sailboats',
      date: '2023-11-20',
      description: 'Abstract seascape',
      imageUrl: 'https://images.unsplash.com/photo-1713731267883-2e1486c3469b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhcnQlMjBwYWludGluZyUyMHdhdGVyY29sb3IlMjBhYnN0cmFjdHxlbnwxfHx8fDE3Nzc4NzY0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      width: 4000,
      height: 3742,
    },
    {
      id: 6,
      type: 'me',
      title: 'Studio Time',
      date: '2023-10-08',
      imageUrl: 'https://images.unsplash.com/photo-1656107757623-90be1e38db91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwZXJzb24lMjBwb3J0cmFpdCUyMGNyZWF0aXZlJTIwYXJ0aXN0aWN8ZW58MXx8fHwxNzc3ODc2NDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      width: 4016,
      height: 6016,
    },
    {
      id: 7,
      type: 'paintings',
      title: 'Green Hills',
      date: '2023-09-12',
      imageUrl: 'https://images.unsplash.com/photo-1713813879071-6d4bd86de919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxhcnQlMjBwYWludGluZyUyMHdhdGVyY29sb3IlMjBhYnN0cmFjdHxlbnwxfHx8fDE3Nzc4NzY0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      width: 5178,
      height: 4944,
    },
    {
      id: 8,
      type: 'paintings',
      title: 'House & Trees',
      date: '2023-08-03',
      description: 'Countryside scene',
      imageUrl: 'https://images.unsplash.com/photo-1703587820516-9836062c8172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxhcnQlMjBwYWludGluZyUyMHdhdGVyY29sb3IlMjBhYnN0cmFjdHxlbnwxfHx8fDE3Nzc4NzY0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      width: 4715,
      height: 6000,
    },
  ];

  const filteredItems = galleryItems.filter(item => item.type === filter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="flex gap-3">
            <button
              onClick={() => setFilter('me')}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === 'me'
                  ? 'bg-primary text-white'
                  : 'bg-white border border-pink-200 text-foreground hover:border-primary'
              }`}
            >
              me
            </button>
            <button
              onClick={() => setFilter('paintings')}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === 'paintings'
                  ? 'bg-primary text-white'
                  : 'bg-white border border-pink-200 text-foreground hover:border-primary'
              }`}
            >
              paintings
            </button>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full rounded-lg hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X size={20} className="text-white" />
          </button>

          <div
            className="max-w-6xl w-full flex flex-col md:flex-row gap-8 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 flex items-center justify-center">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="max-h-[85vh] max-w-full rounded-lg shadow-2xl"
              />
            </div>

            <div className="w-full md:w-96 text-white space-y-3">
              <h3 className="text-2xl">
                {selectedItem.title}
              </h3>

              <p className="text-white/70">
                {formatDate(selectedItem.date)}
              </p>

              {selectedItem.description && (
                <p className="text-white/90 leading-relaxed">
                  {selectedItem.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
