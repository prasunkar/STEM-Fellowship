exports.linkResolver = (doc) => {
  switch (doc.type) {
    case 'newsletter': {
      return `/newsletters/${doc.uid}`
    }

    case 'team_member': {
      return `/team/${doc.uid}`
    }

    case 'initiative': {
      return `/initiatives/${doc.uid}`
    }

    default: {
      return '/'
    }
  }
}
