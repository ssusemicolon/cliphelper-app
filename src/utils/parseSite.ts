import axios from 'axios';
import * as cheerio from 'cheerio';

const isValidUrl = (url: string) => {
  try {
    // eslint-disable-next-line no-new
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

export const parseSite = async (url: string) => {
  if (!url || url?.length <= 1) {
    return;
  }

  if (!isValidUrl(url)) {
    return;
  }

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const title =
      $('title').html() || $('meta[property="og:title"]').attr('content') || '';
    const thumbnail = $('meta[property="og:image"]').attr('content') || '';
    const description =
      $('meta[property="og:description"]').attr('content') || '';

    return { title, thumbnail, description };
  } catch (e) {
    return;
  }
};
