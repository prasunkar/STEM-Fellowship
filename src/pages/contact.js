// TODO: Redesign contact page

import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { init, sendForm } from 'emailjs-com'

import SEO from '../components/SEO'
import { AiOutlineInstagram } from '@react-icons/all-files/ai/AiOutlineInstagram'

export default function ContactPage() {
  const {
    site: {
      siteMetadata: { instaUrl, description },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          instaUrl
          description
        }
      }
    }
  `)

  const [formData, setFormData] = useState({ name: '', email: '', body: '' })
  const [formDisabled, setFormDisabled] = useState(false)

  init('user_G8EhJE3pPtoQGHcMhm9Ow')

  function sendEmail(event) {
    event.preventDefault()

    if (formDisabled) return
    else setFormDisabled(true)

    sendForm(
      'service_4u10mxw',
      'template_ydsssm4',
      event.target,
      'user_G8EhJE3pPtoQGHcMhm9Ow'
    ).then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )

    setFormData({ name: '', email: '', body: '' })
  }

  return (
    // <Layout page="page-contact">
    <main className="page-contact">
      <SEO title="Contact Us" description={description} />
      <h1>Contact Us</h1>
      <p>
        We have no one but our community to thank for our incredible success. We
        love to hear your ideas and cater to them wherever possible. Don’t
        hesitate to leave a message regarding your thoughts, comments, or
        feedback!
      </p>
      <div className="contact-methods">
        <div className="socials">
          <h2>Socials</h2>
          <div className="links">
            <button className="instagram">
              <a href={instaUrl} target="_blank" rel="noopener noreferrer">
                <AiOutlineInstagram />
                <p>Instagram</p>
              </a>
            </button>
          </div>
        </div>
        <div className="get-in-touch">
          <h2>Get In Touch</h2>
          <form onSubmit={sendEmail}>
            <input
              className="name-field"
              type="text"
              name="from_name"
              placeholder="Your Name"
              autoComplete="on"
              maxLength="32"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <input
              className="email-field"
              type="email"
              name="from_email"
              placeholder="Email"
              autoComplete="on"
              maxLength="48"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <textarea
              className="body-field"
              type="text"
              name="body"
              placeholder="What can we do for you?"
              autoCorrect="on"
              spellCheck="true"
              rows="8"
              value={formData.body}
              onChange={(e) =>
                setFormData({ ...formData, body: e.target.value })
              }
              required
            />
            <button
              type="submit"
              disabled={
                formDisabled ||
                !formData.name ||
                !formData.email ||
                !formData.body
              }
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </main>
    // </Layout>
  )
}
