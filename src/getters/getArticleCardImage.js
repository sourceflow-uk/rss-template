export const getArticleCardImage = (item, type) => {
  switch(type){
  case 'caseStudy':
    return item.card_image;
  }

  return item.image;
};
