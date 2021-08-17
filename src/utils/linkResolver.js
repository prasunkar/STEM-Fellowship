exports.linkResolver = (doc) => {
  switch (doc.type) {
    case 'newsletter': {
      return `/newsletters/${doc.uid}`
    }

    case 'team_member': {
      return `/team/${doc.uid}`
    }

    default: {
      return '/'
    }
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
