const linkResolver = (doc) => {
  // URL for a category type
  if (doc.type === 'newsletter') {
    return `/newsletters/${doc.uid}`
  }

  if (doc.type === 'team_member') {
    return `/team/${doc.uid}`
  }

  // URL for an archive?
  // if (doc.type === 'product') {
  //   return `/product/${doc.uid}`
  // }

  // URL for a page type
  // if (doc.type === 'page') {
  //   return `/${doc.uid}`
  // }

  // Backup for all other types
  return '/'
}

module.exports = linkResolver
