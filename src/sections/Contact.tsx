import { CheckCircle, Clock, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="bg-zinc-900/30 py-24 border-t border-zinc-800">
      <div className="section-padding">

        <div className="text-center mb-16">
          <span className="heading-accent">Visit & Experience</span>
          <h2 className="heading-main">Get in touch</h2>
          <p className="heading-sub">
            Reach out for inquiries, private dining events, and catering.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">

          {/* Contact Details & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="card-dark">
              <h3 className="text-xl font-bold text-white font-serif mb-6">Location & Info</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-inherit text-zinc-100 rounded-xl border border-red-800/40">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">Address</h4>
                    <p className="text-zinc-400 text-sm">Number 2 Shuvai Mahofa St. opposite Passport Offices Masvingo </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-inherit text-zinc-100 rounded-xl border border-red-800/40">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">Phone & Inquiries</h4>
                    <p className="text-zinc-400 text-sm">+263 787 575 392</p>
                    <p className="text-zinc-400 text-sm">+263 788 114 205</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-inherit text-zinc-100 rounded-xl border border-red-800/40">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">Operating Hours</h4>
                    <p className="text-zinc-400 text-xs">Mon – Sun: 6:00 AM – 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>


          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className={`card-dark p-8`}>
              <h3 className="text-2xl font-bold text-white font-serif mb-2">Get In Touch</h3>
              <p className="text-zinc-400 text-sm mb-8">Have a question or inquiry? Send us a message and we'll respond as soon as possible.</p>

              {submitted ? (
                <div className="bg-green-950/40 border border-green-800/60 text-white rounded-2xl p-8 text-center space-y-3 animate-fadeIn">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                  <h4 className="text-xl font-bold font-serif">Message Sent!</h4>
                  <p className="text-zinc-300 text-sm">
                    Thank you, {formData.name || 'Valued Guest'}. We have received your message regarding "{formData.subject || 'your inquiry'}" and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-zinc-400 font-medium mb-1 block">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Ashley Moyo"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-zinc-400 font-medium mb-1 block">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="ashley@example.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 font-medium mb-1 block">Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Private dining inquiry"
                      value={formData.subject}
                      onChange={e => setFormData({...formData, subject: e.target.value})}
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 font-medium mb-1 block">Message</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us how we can help..."
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      className="input-field"
                    />
                  </div>

                  <button type="submit" className={`btn-primary w-full mt-2 py-4`}>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;