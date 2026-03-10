import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Shirt, Sparkles, Camera, Heart, Share2, Search, Plus, Wand2 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';

const wardrobe = {
  tops: [
    { id: 't1', name: 'Polo crème', color: 'Crème', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=900&auto=format&fit=crop' },
    { id: 't2', name: 'Pull bordeaux', color: 'Bordeaux', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=900&auto=format&fit=crop' },
    { id: 't3', name: 'Chemise rayée', color: 'Bleu', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=900&auto=format&fit=crop' },
  ],
  bottoms: [
    { id: 'b1', name: 'Pantalon noir', color: 'Noir', image: 'https://images.unsplash.com/photo-1506629905607-d9f4b6b4b4ee?q=80&w=900&auto=format&fit=crop' },
    { id: 'b2', name: 'Short bordeaux', color: 'Bordeaux', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=900&auto=format&fit=crop' },
  ],
  shoes: [
    { id: 's1', name: 'Sneakers crème', color: 'Crème', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop' },
    { id: 's2', name: 'Mocassins noirs', color: 'Noir', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=900&auto=format&fit=crop' },
  ],
  layers: [
    { id: 'l1', name: 'Varsity rouge', color: 'Rouge', image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=900&auto=format&fit=crop' },
    { id: 'l2', name: 'Veste camel', color: 'Camel', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop' },
  ],
};

const inspo = [
  { id: 'i1', title: 'Le crochet bordeaux', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop' },
  { id: 'i2', title: 'Le relax étudié', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=900&auto=format&fit=crop' },
  { id: 'i3', title: "L'olive & blanc", image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=900&auto=format&fit=crop' },
];

const productGroups = [
  { key: 'tops', label: 'Hauts' },
  { key: 'bottoms', label: 'Bas' },
  { key: 'shoes', label: 'Chaussures' },
  { key: 'layers', label: 'Vestes' },
];

function BottomNav({ view, setView }) {
  const items = [
    ['inspo', 'Inspo', Sparkles],
    ['closet', 'Closet', Shirt],
    ['create', 'Composer', Wand2],
    ['tryon', 'Try-on', Camera],
  ];
  return (
    <div className="sticky bottom-0 border-t border-[#eadfce] bg-[#fbf8f3]/95 backdrop-blur px-3 py-2">
      <div className="grid grid-cols-4 gap-2">
        {items.map(([key, label, Icon]) => (
          <button
            key={key}
            onClick={() => setView(key)}
            className={`rounded-2xl px-2 py-2 text-xs flex flex-col items-center gap-1 transition ${view === key ? 'bg-[#2a211c] text-white' : 'bg-[#f2eadf] text-[#5f5148]'}`}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Header({ title, right }) {
  return (
    <div className="flex items-center justify-between px-4 pt-5 pb-3">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-[#9c8779]">Le Touché</p>
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      {right}
    </div>
  );
}

function InspoView({ setView }) {
  return (
    <>
      <Header
        title="Inspo"
        right={<Button className="rounded-full bg-[#d8c0a8] text-[#2a211c] hover:bg-[#ccb299]"><Upload className="w-4 h-4 mr-2" />Upload outfit</Button>}
      />
      <div className="px-4 space-y-4 pb-24">
        <Card className="rounded-[28px] overflow-hidden border-[#eadfce] bg-white/70">
          <CardContent className="p-0">
            <img src={inspo[0].image} alt="featured" className="w-full h-80 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#9c8779]">Look signature</p>
                  <h2 className="text-lg font-semibold">{inspo[0].title}</h2>
                </div>
                <Button size="icon" variant="outline" className="rounded-full border-[#dccab7]"><Share2 className="w-4 h-4" /></Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium">Trending ideas</h3>
            <button onClick={() => setView('create')} className="text-sm text-[#7f6657]">Make an outfit</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {inspo.slice(1).map((item) => (
              <Card key={item.id} className="rounded-[24px] overflow-hidden border-[#eadfce] bg-white/70">
                <CardContent className="p-0">
                  <img src={item.image} alt={item.title} className="w-full h-44 object-cover" />
                  <div className="p-3">
                    <p className="font-medium text-sm">{item.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function ClosetView({ selection, setSelection, setView }) {
  return (
    <>
      <Header title="Closet" right={<Button size="icon" className="rounded-full bg-[#2a211c] hover:bg-[#2a211c]"><Plus className="w-4 h-4" /></Button>} />
      <div className="px-4 pb-24 space-y-5">
        {productGroups.map((group) => (
          <div key={group.key}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">{group.label}</h3>
              <span className="text-xs text-[#8b7668]">{wardrobe[group.key].length} items</span>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-1">
              {wardrobe[group.key].map((item) => {
                const active = selection[group.key] === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelection((prev) => ({ ...prev, [group.key]: item.id }))}
                    className={`min-w-[120px] rounded-[24px] border overflow-hidden bg-white ${active ? 'border-[#2a211c] ring-2 ring-[#d8c0a8]' : 'border-[#eadfce]'}`}
                  >
                    <img src={item.image} alt={item.name} className="w-full h-32 object-cover" />
                    <div className="p-3 text-left">
                      <p className="text-sm font-medium line-clamp-1">{item.name}</p>
                      <p className="text-xs text-[#8b7668]">{item.color}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
        <Button onClick={() => setView('create')} className="w-full rounded-2xl h-12 bg-[#b69172] text-white hover:bg-[#a88366]">
          <Sparkles className="w-4 h-4 mr-2" /> Composer un look
        </Button>
      </div>
    </>
  );
}

function CreateView({ selection, setView }) {
  const selectedItems = useMemo(() => {
    return Object.entries(selection)
      .map(([group, id]) => wardrobe[group]?.find((item) => item.id === id))
      .filter(Boolean);
  }, [selection]);

  return (
    <>
      <Header title="Compose" right={<div className="flex gap-2"><Badge className="rounded-full bg-[#f2eadf] text-[#6f5e53] hover:bg-[#f2eadf]">Paris</Badge><Badge className="rounded-full bg-[#f2eadf] text-[#6f5e53] hover:bg-[#f2eadf]">Casual chic</Badge></div>} />
      <div className="px-4 pb-24 space-y-4">
        <Card className="rounded-[28px] border-[#eadfce] bg-gradient-to-b from-[#ede2d4] to-[#d7c2ae]">
          <CardContent className="p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#7e6758]">Le Touché suggestion</p>
            <h2 className="text-2xl font-semibold mt-1">Bassline Boss</h2>
            <p className="text-sm text-[#5d4a3f] mt-2">A neat silhouette with one statement layer and clean shoes.</p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {selectedItems.length ? selectedItems.map((item) => (
                <div key={item.id} className="rounded-[22px] bg-white/60 p-2">
                  <img src={item.image} alt={item.name} className="w-full h-32 rounded-[18px] object-cover" />
                  <p className="text-sm mt-2 font-medium line-clamp-1">{item.name}</p>
                </div>
              )) : (
                <div className="col-span-2 rounded-[22px] bg-white/60 p-6 text-center text-sm text-[#6a574b]">Select pieces in Closet to generate a first outfit.</div>
              )}
            </div>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" className="rounded-full border-[#c6ad97] bg-transparent"><Heart className="w-4 h-4 mr-2" />Save</Button>
              <Button onClick={() => setView('tryon')} className="rounded-full bg-[#2a211c] hover:bg-[#2a211c]"><Camera className="w-4 h-4 mr-2" />Try on</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-[24px] border-[#eadfce] bg-white/70">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <Search className="w-4 h-4 text-[#8b7668]" />
              <Input placeholder="Search by mood, color, occasion" className="border-0 shadow-none bg-transparent px-0" />
            </div>
            <div className="flex flex-wrap gap-2">
              {['Dinner', 'School event', 'Streetwear', 'Elegant', 'Warm weather'].map((tag) => (
                <Badge key={tag} className="rounded-full bg-[#f2eadf] text-[#6f5e53] hover:bg-[#f2eadf]">{tag}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

function TryOnView({ selection }) {
  const hero = wardrobe.layers.find((x) => x.id === selection.layers) || wardrobe.layers[0];
  return (
    <>
      <Header title="Try-on" right={<Button className="rounded-full bg-[#d8c0a8] text-[#2a211c] hover:bg-[#ccb299]">Upload selfie</Button>} />
      <div className="px-4 pb-24 space-y-4">
        <Card className="rounded-[28px] border-[#eadfce] overflow-hidden bg-white">
          <CardContent className="p-0">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop" alt="avatar" className="w-full h-[480px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-[22px] bg-white/85 backdrop-blur p-3 flex items-center gap-3">
                <img src={hero.image} alt={hero.name} className="w-16 h-16 rounded-2xl object-cover" />
                <div className="flex-1">
                  <p className="font-medium">{hero.name}</p>
                  <p className="text-xs text-[#7b685d]">Virtual try-on placeholder for the private prototype</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="rounded-2xl h-12 border-[#d9c6b2] bg-white"><Heart className="w-4 h-4 mr-2" />Save look</Button>
          <Button className="rounded-2xl h-12 bg-[#9d7a5f] hover:bg-[#8f6c53]"><Share2 className="w-4 h-4 mr-2" />Share</Button>
        </div>
      </div>
    </>
  );
}

export default function LeToucheStylingApp() {
  const [view, setView] = useState('inspo');
  const [selection, setSelection] = useState({
    tops: 't1',
    bottoms: 'b1',
    shoes: 's1',
    layers: 'l1',
  });

  return (
    /* Desktop: warm background with the phone shell centered and scaled up slightly */
    <div className="min-h-screen bg-[#ede8e0] flex flex-col items-center justify-start py-0 md:py-10 px-0 md:px-4">

      {/* Back link — only visible on desktop above the shell */}
      <div className="hidden md:flex w-full max-w-[420px] justify-between items-center mb-4 px-1">
        <p className="text-xs uppercase tracking-[0.3em] text-[#9c8779] font-mono">Le Touché — Styling</p>
        <a href="/" className="text-xs text-[#9c8779] hover:text-[#2a211c] transition-colors font-mono tracking-widest uppercase">← Site</a>
      </div>

      {/* Phone shell — full screen on mobile, contained + scaled on desktop */}
      <div className="
        w-full h-screen text-[#2a211c] bg-[#fbf8f3] flex flex-col overflow-hidden
        md:w-[420px] md:h-[860px] md:rounded-[40px] md:shadow-2xl md:border md:border-[#e0d5c5]
      ">
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="flex-1 overflow-auto flex flex-col"
        >
          <div className="flex-1 overflow-auto">
            {view === 'inspo' && <InspoView setView={setView} />}
            {view === 'closet' && <ClosetView selection={selection} setSelection={setSelection} setView={setView} />}
            {view === 'create' && <CreateView selection={selection} setView={setView} />}
            {view === 'tryon' && <TryOnView selection={selection} />}
          </div>
          <BottomNav view={view} setView={setView} />
        </motion.div>
      </div>
    </div>
  );
}
