import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getMarkdownContent(folder: string, filename: string) {
  const fullPath = path.join(contentDirectory, folder, `${filename}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    data,
    content,
  };
}

export function getAllMarkdownFiles(folder: string) {
  const directory = path.join(contentDirectory, folder);
  
  if (!fs.existsSync(directory)) {
    return [];
  }
  
  const filenames = fs.readdirSync(directory);
  
  const files = filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const fullPath = path.join(directory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug: filename.replace(/\.md$/, ''),
        data,
        content,
      };
    });
  
  return files;
}

export function getPageContent(pageName: string) {
  return getMarkdownContent('pages', pageName);
}

export function getGuitars() {
  return getAllMarkdownFiles('guitars');
}

export function getPlayers() {
  return getAllMarkdownFiles('players');
}

export function getGalleryItems() {
  return getAllMarkdownFiles('gallery');
}

export function getVideos() {
  return getAllMarkdownFiles('videos');
}