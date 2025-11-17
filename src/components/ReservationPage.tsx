import { useState } from "react";
import {
  Calendar,
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    zone: "dining",
    specialRequests: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      zone: "dining",
      specialRequests: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Reserve Your <span className="text-orange-500">Perfect Table</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join us for an unforgettable dining experience. Book your table now
            and enjoy exceptional cuisine in a welcoming atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Info Section */}
          <div className="lg:col-span-1 space-y-6">
            {/* Restaurant Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-orange-500" />
                <h3 className="font-bold text-lg text-gray-900">
                  Opening Hours
                </h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p className="flex justify-between">
                  <span>Monday - Thursday:</span>{" "}
                  <span className="font-semibold">11:00 AM - 11:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Friday - Saturday:</span>{" "}
                  <span className="font-semibold">11:00 AM - 12:00 AM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>{" "}
                  <span className="font-semibold">10:00 AM - 10:00 PM</span>
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-orange-500" />
                <h3 className="font-bold text-lg text-gray-900">Location</h3>
              </div>
              <p className="text-gray-600">
                123 Culinary Street
                <br />
                Food City, FC 12345
                <br />
                <span className="font-semibold text-gray-900 mt-2 block">
                  United States
                </span>
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-orange-500" />
                <h3 className="font-bold text-lg text-gray-900">Contact</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-500" />
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-orange-500" />
                  info@restaurant.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-sm p-8 space-y-6"
            >
              {/* Success Message */}
              {submitted && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3 animate-in fade-in slide-in-from-top">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-900">
                      Reservation Confirmed!
                    </p>
                    <p className="text-sm text-green-700">
                      We've sent a confirmation email to {formData.email}
                    </p>
                  </div>
                </div>
              )}

              {/* Personal Information */}
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Reservation Details */}
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Reservation Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      <Calendar className="inline w-4 h-4 mr-2 text-orange-500" />
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      <Clock className="inline w-4 h-4 mr-2 text-orange-500" />
                      Time *
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      <Users className="inline w-4 h-4 mr-2 text-orange-500" />
                      Number of Guests *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, "More"].map((num) => (
                        <option key={num} value={String(num)}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="zone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      <MapPin className="inline w-4 h-4 mr-2 text-orange-500" />
                      Preferred Zone *
                    </label>
                    <select
                      id="zone"
                      name="zone"
                      value={formData.zone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="dining">Main Dining Area</option>
                      <option value="patio">Outdoor Patio</option>
                      <option value="private">Private Room</option>
                      <option value="bar">Bar Section</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label
                  htmlFor="specialRequests"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Special Requests (Optional)
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  placeholder="Let us know about any special occasions, dietary requirements, or preferences..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Complete Your Reservation
              </button>

              <p className="text-center text-sm text-gray-500">
                We'll confirm your reservation via email within 1 hour
              </p>
            </form>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-orange-500" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">
              Instant Confirmation
            </h4>
            <p className="text-gray-600 text-sm">
              Get your reservation confirmed immediately via email
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-orange-500" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Flexible Seating</h4>
            <p className="text-gray-600 text-sm">
              Choose your preferred dining zone and special setup
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-orange-500" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Prime Locations</h4>
            <p className="text-gray-600 text-sm">
              Experience dining in our most popular areas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
