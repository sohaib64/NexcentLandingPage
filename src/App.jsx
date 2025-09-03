import React from 'react';
import {
  Users,
  Building,
  UserCheck,
  Building2,
  TrendingUp,
  CreditCard,
  Instagram,
  Globe,
  Twitter,
  Youtube,
  Send,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

import NexcentLogo from "./assets/nexcent-logo-black.png";
import loginMobile from "./assets/Home page images/login-mobile.png";
import HeroIllustration from "./assets/Home page images/Illustrationhero-page-person-standing.png";
import userSmartphone from "./assets/Home page images/user smart phone.png";
import teslaImage from "./assets/Tim smith.svg";
import footerLogo from "./assets/nexcent-logo-white.png";
import oldMan from "./assets/oldman.svg";
import working from "./assets/working.svg";
import laptop from "./assets/laptop.svg";
import Logo1 from "./assets/Logos/Logo-1.png";
import Logo2 from "./assets/Logos/Logo-2.png";
import Logo3 from "./assets/Logos/Logo-3.png";
import Logo4 from "./assets/Logos/Logo-4.png";
import Logo5 from "./assets/Logos/Logo-5.png";
import Logo6 from "./assets/Logos/Logo-6.png";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={NexcentLogo}
                alt="Nexcent Logo"
                className="h-8 w-auto sm:h-10"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-6 flex items-baseline space-x-6 lg:ml-10 lg:space-x-8">
                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-green-500 transition-colors">Home</a>
                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-green-500 transition-colors">Features</a>
                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-green-500 transition-colors">Community</a>
                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-green-500 transition-colors">Blog</a>
                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-green-500 transition-colors">Pricing</a>
              </div>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <button className="flex items-center space-x-2 rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition-colors sm:px-6">
                <span>Register Now</span>
                <ArrowRight className="h-4 w-4 text-white" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="space-y-1 pb-3 pt-2">
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-500">Home</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-green-500">Features</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-green-500">Community</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-green-500">Blog</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-green-500">Pricing</a>
                <button className="w-full mt-4 flex items-center justify-center space-x-2 rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition-colors">
                  <span>Register Now</span>
                  <ArrowRight className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-50 py-8 sm:py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
                Lessons and insights <span className="text-green-500">from 8 years</span>
              </h1>
              <p className="text-sm text-gray-600 sm:text-base md:text-lg">
                Where to grow your business as a photographer: site or social media?
              </p>
              <div className="pt-2 sm:pt-4">
                <button className="w-full sm:w-auto rounded-md bg-green-500 px-6 py-3 text-white hover:bg-green-600 transition-colors sm:px-8 sm:py-3 sm:text-lg">
                  Register
                </button>
              </div>
            </div>

            <div className="flex justify-center order-first lg:order-last">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                <img
                  src={HeroIllustration}
                  alt="Person standing illustration"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">Our clients are from</h2>
          <p className="mb-6 text-sm text-gray-600 sm:mb-8 sm:text-base">We have been working with some Fortune 500+ clients</p>

          <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-6 md:gap-8 lg:gap-12">
            {[Logo1, Logo2, Logo3, Logo4, Logo5, Logo6].map((logo, idx) => (
              <div key={idx} className="flex h-12 w-12 items-center justify-center rounded-lg border bg-gray-100 sm:h-16 sm:w-16 md:h-20 md:w-20">
                <img src={logo} alt={`Client logo ${idx + 1}`} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-1 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">Manage your entire community</h2>
          <h3 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">in a single system</h3>
          <p className="mb-8 text-sm text-gray-600 sm:mb-10 md:mb-12 sm:text-base">Who is Nextcent suitable for?</p>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <div className="rounded-lg bg-white p-4 text-center shadow-sm transition-shadow hover:shadow-md sm:p-6">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 sm:h-16 sm:w-16">
                  <Users className="h-6 w-6 text-green-600 sm:h-8 sm:w-8" />
                </div>
              </div>
              <h4 className="mb-2 text-base font-bold text-gray-900 sm:text-lg">Membership Organisations</h4>
              <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                Our membership management software provides full automation of membership renewals and payments
              </p>
            </div>

            <div className="rounded-lg bg-white p-4 text-center shadow-sm transition-shadow hover:shadow-md sm:p-6">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 sm:h-16 sm:w-16">
                  <Building className="h-6 w-6 text-green-600 sm:h-8 sm:w-8" />
                </div>
              </div>
              <h4 className="mb-2 text-base font-bold text-gray-900 sm:text-lg">National Associations</h4>
              <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                Our membership management software provides full automation of membership renewals and payments
              </p>
            </div>

            <div className="rounded-lg bg-white p-4 text-center shadow-sm transition-shadow hover:shadow-md sm:p-6 md:col-span-2 lg:col-span-1">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 sm:h-16 sm:w-16">
                  <UserCheck className="h-6 w-6 text-green-600 sm:h-8 sm:w-8" />
                </div>
              </div>
              <h4 className="mb-2 text-base font-bold text-gray-900 sm:text-lg">Clubs And Groups</h4>
              <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                Our membership management software provides full automation of membership renewals and payments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-50 py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 grid items-center gap-8 lg:mb-16 lg:grid-cols-2 lg:gap-12">
            <div className="flex justify-center order-first lg:order-last">
              <div className="relative">
                <img
                  src={userSmartphone}
                  alt="User with smartphone"
                  className="h-48 w-auto rounded-2xl object-contain sm:h-64 md:h-80 lg:h-96"
                />
              </div>
            </div>

            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-xl font-bold leading-tight text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl">
                The unseen of spending three years at Pixelgrade
              </h2>
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, corporis odit. Aspernatur earum officia aperiam facere voluptates ea! Commodi omnis quaerat corrupti cumque eos at officiis ipsa modi, voluptas sed.
              </p>
            </div>
          </div>

          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="space-y-3 text-center lg:text-left sm:space-y-4 lg:space-y-6">
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl md:text-2xl lg:text-3xl">
                Helping a local <span className="text-green-500">business reinvent itself</span>
              </h3>
              <p className="text-sm text-gray-600 sm:text-base md:text-lg">
                We reached here with our hard work and dedication
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 sm:h-12 sm:w-12">
                    <Users className="h-5 w-5 text-green-600 sm:h-6 sm:w-6" />
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">534</div>
                  <div className="text-xs text-gray-600 sm:text-sm">Members</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 sm:h-12 sm:w-12">
                    <Building2 className="h-5 w-5 text-green-600 sm:h-6 sm:w-6" />
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">328</div>
                  <div className="text-xs text-gray-600 sm:text-sm">Clubs</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 sm:h-12 sm:w-12">
                    <TrendingUp className="h-5 w-5 text-green-600 sm:h-6 sm:w-6" />
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">867</div>
                  <div className="text-xs text-gray-600 sm:text-sm">Bookings</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 sm:h-12 sm:w-12">
                    <CreditCard className="h-5 w-5 text-green-600 sm:h-6 sm:w-6" />
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">436</div>
                  <div className="text-xs text-gray-600 sm:text-sm">Payments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-8 sm:py-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="flex items-center justify-center order-first lg:order-last">
            <img
              src={loginMobile}
              alt="Mobile app"
              className="h-48 w-auto object-contain sm:h-64 md:h-80 lg:h-96"
            />
          </div>

          <div className="text-center lg:text-left">
            <h2 className="mb-4 text-xl font-bold leading-tight text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl">
              How to design your site footer like we did ?
            </h2>
            <p className="mb-6 text-sm text-gray-900 sm:mb-8 sm:text-base md:text-lg">
              Experience unparalleled support with Nexcent's dedicated team of
              experts. From the initial consultation to ongoing campaign
              management, our responsive support ensures your queries are
              addressed promptly. Your success is our success, and we're committed
              to providing the assistance you need, when you need it.
            </p>
            <button className="w-full sm:w-auto rounded-lg bg-green-500 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-green-600 sm:px-6 sm:py-3 sm:text-lg">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-50 py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex justify-center order-first lg:order-last">
              <div className="h-48 w-64 overflow-hidden rounded-lg bg-gray-900 shadow-lg sm:h-56 sm:w-72 md:h-64 md:w-80">
                <img
                  src={teslaImage}
                  alt="Tim Smith"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 text-center lg:text-left sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                  Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                  tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
                  enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie
                  mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
                  eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                  vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum
                  id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </p>

                <div>
                  <h4 className="mb-1 text-base font-semibold text-green-500 sm:text-lg">Tim Smith</h4>
                  <p className="text-xs text-gray-500 sm:text-sm">British Dragon Boat Racing Association</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
                  {[Logo1, Logo2, Logo3, Logo4, Logo5, Logo6].map((logo, idx) => (
                    <div key={idx} className="flex h-6 w-6 items-center justify-center sm:h-8 sm:w-8">
                      <img src={logo} alt={`Logo ${idx + 1}`} className="h-6 w-6 object-contain sm:h-8 sm:w-8" />
                    </div>
                  ))}
                  <div className="pt-2 sm:pt-4">
                    <a
                      href="#"
                      className="inline-flex items-center font-semibold text-green-500 transition-colors hover:text-green-600">
                      Meet all customers
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Blog Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
              Caring is the new marketing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              The Nexcent blog is the best place to read about the latest membership insights, trends and more.
              See who's joining the community, read about how our community are
              increasing their membership income and lot's more.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Card 1 */}
            <div className="relative bg-gray-100 rounded-lg max-w-sm mx-auto w-full">
              <img
                src={oldMan}
                alt="safeguard"
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg"
              />

              <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 bg-white shadow-lg text-center flex flex-col justify-center items-center px-3 pt-4 pb-6 rounded-lg">
                <h3 className="text-sm font-medium mb-3 sm:text-base">
                  Create streamlined safeguarding process with OneRan
                </h3>
                <a
                  href="/blog"
                  className="text-green-800 hover:underline text-sm sm:text-base px-2 py-1"
                >
                  Read more →
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-gray-100 rounded-lg max-w-sm mx-auto w-full">
              <img
                src={working}
                alt="responsibility"
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg"
              />

              <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 bg-white shadow-lg text-center flex flex-col justify-center items-center px-3 pt-4 pb-6 rounded-lg">
                <h3 className="text-sm font-medium mb-3 sm:text-base">
                  What are your safeguarding responsibilities and how can you manage them?
                </h3>
                <a
                  href="/blog"
                  className="text-green-800 hover:underline text-sm sm:text-base px-2 py-1"
                >
                  Read more →
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-gray-100 rounded-lg max-w-sm mx-auto w-full sm:col-span-2 lg:col-span-1">
              <img
                src={laptop}
                alt="australia"
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg"
              />

              <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 bg-white shadow-lg text-center flex flex-col justify-center items-center px-3 pt-4 pb-6 rounded-lg">
                <h3 className="text-sm font-medium mb-3 sm:text-base">
                  Rewamping the membership model with triathlon Australia
                </h3>
                <a
                  href="/blog"
                  className="text-green-800 hover:underline text-sm sm:text-base px-2 py-1"
                >
                  Read more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-2xl font-bold leading-tight text-gray-800 sm:text-3xl md:text-4xl lg:text-5xl">
            Pellentesque suscipit<br className="hidden sm:block" />
            fringilla libero eu.
          </h2>
          <button className="inline-flex items-center space-x-2 rounded-md bg-green-500 px-5 py-2.5 font-medium text-white hover:bg-green-600 transition-colors sm:px-6 sm:py-3">
            <span>Get a Demo</span>
            <span>→</span>
          </button>
        </div>
      </section>


      {/* Footer */}
      <footer className="flex bg-slate-800 py-8 text-white sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3">
                <img
                  src={footerLogo}
                  alt="Nexcent Logo"
                  className="h-10 w-10 scale-125 object-contain sm:h-12 sm:w-12 md:h-16 md:w-16"
                />
              </div>
              <div className="space-y-1 text-xs text-gray-300 sm:text-sm">
                <p>Copyright © 2020 Landify UI Kit.</p>
                <p>All rights reserved</p>
              </div>

              <div className="flex space-x-3 pt-2">
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-600 transition-colors hover:bg-gray-500">
                  <Instagram className="h-4 w-4" />
                </div>
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-600 transition-colors hover:bg-gray-500">
                  <Globe className="h-4 w-4" />
                </div>
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-600 transition-colors hover:bg-gray-500">
                  <Twitter className="h-4 w-4" />
                </div>
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-600 transition-colors hover:bg-gray-500">
                  <Youtube className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-base font-semibold text-white sm:mb-4 md:mb-6 sm:text-lg">Company</h3>
              <ul className="space-y-2 text-xs text-gray-300 sm:space-y-3 md:space-y-4 sm:text-sm">
                <li><a href="#" className="transition-colors hover:text-white">About us</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Blog</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Contact us</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Pricing</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Testimonials</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-base font-semibold text-white sm:mb-4 md:mb-6 sm:text-lg">Support</h3>
              <ul className="space-y-2 text-xs text-gray-300 sm:space-y-3 md:space-y-4 sm:text-sm">
                <li><a href="#" className="transition-colors hover:text-white">Help center</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Terms of service</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Legal</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Privacy policy</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Status</a></li>
              </ul>
            </div>

            <div className="md:col-span-2 lg:col-span-1">
              <h3 className="mb-3 text-base font-semibold text-white sm:mb-4 md:mb-6 sm:text-lg">Stay up to date</h3>
              <div className="flex overflow-hidden rounded-lg">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 border-none bg-gray-700 px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 sm:px-4 sm:py-3 sm:text-sm"
                />
                <button className="bg-gray-700 px-3 py-2 transition-colors hover:bg-green-500 sm:px-4 sm:py-3">
                  <Send className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;