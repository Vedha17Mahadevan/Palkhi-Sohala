import { useState, useMemo } from 'react';
import rawPalkhiData from '../../palkhis.json';
import { Palkhi } from '../types';

const PALKHI_DATA = rawPalkhiData as Palkhi[];

const parseDurationDays = (durationStr: string): number => {
  const normalized = durationStr.replace('+', '').replace('–', '-').replace('-', '-').trim();
  if (normalized.includes('-')) {
    const parts = normalized.split('-').map(p => parseInt(p.trim(), 10));
    const maxVal = parts[1];
    return isNaN(maxVal) ? (parts[0] || 0) : maxVal;
  }
  const val = parseInt(normalized, 10);
  return isNaN(val) ? 0 : val;
};

export const usePalkhiFilters = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [sortOption, setSortOption] = useState('Default');

  const parsedPalkhis = useMemo(() => {
    return PALKHI_DATA.map(palkhi => ({
      ...palkhi,
      _parsedDuration: parseDurationDays(palkhi.durationDays)
    }));
  }, []);

  const filteredPalkhis = useMemo(() => {
    return parsedPalkhis.filter(palkhi => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const nameMatch = palkhi.name.toLowerCase().includes(q);
        const marathiMatch = palkhi.marathiName?.toLowerCase().includes(q);
        const saintMatch = palkhi.saint.toLowerCase().includes(q);
        const originMatch = palkhi.origin.toLowerCase().includes(q);
        const districtMatch = palkhi.district.toLowerCase().includes(q);
        const categoryMatch = palkhi.category.toLowerCase().includes(q);
        if (!(nameMatch || marathiMatch || saintMatch || originMatch || districtMatch || categoryMatch)) {
          return false;
        }
      }

      // 2. Category
      if (selectedCategory !== 'All') {
        const isMajor = palkhi.category.toLowerCase().includes('major') || palkhi.category.toLowerCase().includes('manachi');
        if (selectedCategory === 'Major / Manachi' && !isMajor) return false;
        if (selectedCategory === 'Other Palkhis' && isMajor) return false;
      }

      // 3. District
      if (selectedDistrict !== 'All') {
        if (selectedDistrict === 'Other') {
          const majorDistricts = ['pune', 'satara', 'solapur', 'ahmednagar', 'nashik', 'kolhapur', 'sangli'];
          if (majorDistricts.includes(palkhi.district.toLowerCase())) return false;
        } else {
          if (palkhi.district.toLowerCase() !== selectedDistrict.toLowerCase()) return false;
        }
      }

      // 4. Duration
      if (selectedDuration !== 'All') {
        const days = palkhi._parsedDuration;
        if (selectedDuration === 'Under 10 Days' && days >= 10) return false;
        if (selectedDuration === '10–15 Days' && (days < 10 || days > 15)) return false;
        if (selectedDuration === '15–20 Days' && (days < 15 || days > 20)) return false;
        if (selectedDuration === 'Above 20 Days' && days <= 20) return false;
      }

      return true;
    });
  }, [parsedPalkhis, searchQuery, selectedCategory, selectedDistrict, selectedDuration]);

  const sortedPalkhis = useMemo(() => {
    return [...filteredPalkhis].sort((a, b) => {
      switch (sortOption) {
        case 'Alphabetical (A–Z)':
          return a.name.localeCompare(b.name);
        case 'Alphabetical (Z–A)':
          return b.name.localeCompare(a.name);
        case 'Distance (Shortest First)':
          return a.distanceKm - b.distanceKm;
        case 'Distance (Longest First)':
          return b.distanceKm - a.distanceKm;
        case 'Duration (Shortest First)':
          return a._parsedDuration - b._parsedDuration;
        case 'Duration (Longest First)':
          return b._parsedDuration - a._parsedDuration;
        default:
          return 0; // default JSON order
      }
    });
  }, [filteredPalkhis, sortOption]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedDistrict('All');
    setSelectedDuration('All');
    setSortOption('Default');
  };

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedDistrict,
    setSelectedDistrict,
    selectedDuration,
    setSelectedDuration,
    sortOption,
    setSortOption,
    sortedPalkhis,
    resetFilters
  };
};
