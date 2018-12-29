import React from 'react'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './EnquiryForm.css'

const fetch = window.fetch

class Form extends React.Component {
  static defaultProps = {
    name: 'Simple Form Ajax',
    subject: '', // optional subject of the notification email
    action: '',
    successMessage: 'Thanks for your enquiry, we will get back to you soon',
    errorMessage:
      'There is a problem, your message has not been sent, please try contacting us via email'
  }

  state = {
    alert: '',
    disabled: false
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return

    const form = e.target
    const data = serialize(form)
    this.setState({ disabled: true })
    fetch(form.action + '?' + stringify(data), {
      method: 'POST'
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error('Network error')
        }
      })
      .then(() => {
        form.reset()
        this.setState({
          alert: this.props.successMessage,
          disabled: false
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({
          disabled: false,
          alert: this.props.errorMessage
        })
      })
  }

  render () {
    const { name, subject, action } = this.props

    return (
      <form
        className='EnquiryForm'
        name={name}
        action={action}
        onSubmit={this.handleSubmit}
        data-netlify=''
        data-netlify-honeypot='_gotcha'
      >
        {this.state.alert && (
          <div className='EnquiryForm--Alert'>{this.state.alert}</div>
        )}
        <div className="EnquiryForm--Element">
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Jason Somai'
            name='name'
            required
          />
        <label className='EnquiryForm--Label' for='name'>Your Name</label>
        </div>
        <div className="EnquiryForm--Element">
          <input
            className='EnquiryForm--Input'
            type='email'
            placeholder='jason@email.com'
            name='email'
            required
          />
          <label className='EnquiryForm--Label' for='email'>Your Email</label>
        </div>
        <div className="EnquiryForm--Element">
          <textarea
            className='EnquiryForm--Input EnquiryForm--Textarea'
            placeholder='Your stuff is neat! I have a question about...'
            name='message'
            rows='10'
            required
          />
          <label className='EnquiryForm--Label' for='message'>Your Message</label>
        </div>
        <input type='text' name='_gotcha' style={{ display: 'none' }} />
        {!!subject && <input type='hidden' name='subject' value={subject} />}
        <input type='hidden' name='form-name' value={name} />
        <input
          className='Button EnquiryForm--SubmitButton'
          type='submit'
          value='Send'
          disabled={this.state.disabled}
        />
      </form>
    )
  }
}

export default Form
