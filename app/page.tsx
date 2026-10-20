'use client';

import { useEffect } from 'react';
import { siteMarkup } from '../src/main';
import NexoraChatbot from './components/nexora-chatbot';

const widgetSelectors = [
  'iframe[src*="chat" i]', 'iframe[src*="messenger" i]', 'iframe[src*="intercom" i]',
  'iframe[src*="crisp" i]', 'iframe[src*="zendesk" i]', 'iframe[src*="tawk" i]',
  'iframe[title*="chat" i]', '[aria-label*="chat" i]', '[aria-label*="live support" i]',
  '[id*="intercom" i]', '[id*="crisp" i]', '[id*="tawk" i]', '[id*="zendesk" i]',
  '[id*="messenger" i]', '[class*="intercom" i]', '[class*="crisp" i]',
  '[class*="tawk" i]', '[class*="zendesk" i]', '[class*="messenger" i]',
].join(',');

export default function Home() {
  useEffect(() => {
    const hideInjectedWidgets = () => {
      document.querySelectorAll<HTMLElement>(widgetSelectors).forEach(element => {
        element.classList.add('floating-widget-hidden');
      });
    };

    hideInjectedWidgets();
    const observer = new MutationObserver(hideInjectedWidgets);
    observer.observe(document.documentElement, { childList: true, subtree: true });

    const filterButtons = [...document.querySelectorAll<HTMLButtonElement>('.filter-button')];
    const filterHandlers = filterButtons.map(button => {
      const handler = () => {
        const filter = button.dataset.filter || 'all';
        filterButtons.forEach(item => item.classList.toggle('active', item === button));
        document.querySelectorAll<HTMLElement>('.portfolio-card').forEach(card => {
          card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter);
        });
      };
      button.addEventListener('click', handler);
      return handler;
    });

    const form = document.querySelector<HTMLFormElement>('#project-form');
    const selectedTemplate = new URLSearchParams(window.location.search).get('template');
    const templateNames: Record<string, string> = {
      restaurant: 'Restaurant and Cafe',
      professional: 'Professional Services',
      product: 'Product Launch',
    };
    const selectedService = new URLSearchParams(window.location.search).get('service');
    const templateName = selectedTemplate ? templateNames[selectedTemplate] : undefined;
    if (form && templateName) {
      const typeField = form.querySelector<HTMLSelectElement>('[name="type"]');
      const detailsField = form.querySelector<HTMLTextAreaElement>('[name="details"]');
      if (typeField) typeField.value = 'Landing Page';
      if (detailsField && !detailsField.value) {
        detailsField.value = `I'm interested in the ${templateName} landing page template.`;
      }
    }
    if (form && selectedService === 'custom-web-apps') {
      const typeField = form.querySelector<HTMLSelectElement>('[name="type"]');
      const detailsField = form.querySelector<HTMLTextAreaElement>('[name="details"]');
      if (typeField) typeField.value = 'Custom Web App';
      if (detailsField && !detailsField.value) {
        detailsField.value = 'I need a custom web app for workflow automation, integrations, and scalable operations.';
      }
    }
    const packageSelect = form?.querySelector<HTMLSelectElement>('[name="package"]');
    const packageButtons = [...document.querySelectorAll<HTMLAnchorElement>('.price-grid [data-package]')];
    const packageHandlers = packageButtons.map(button => {
      const handler = () => {
        if (packageSelect) packageSelect.value = button.dataset.package || '';
      };
      button.addEventListener('click', handler);
      return handler;
    });
    const submitHandler = (event: SubmitEvent) => {
      event.preventDefault();
      if (!form) return;
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const data = new FormData(form);
      const message = `Hi, I want a website. Name: ${data.get('name')}. Business: ${data.get('business')}. Type: ${data.get('type')}. Package: ${data.get('package')}. Details: ${data.get('details')}`;
      const url = `https://wa.me/923298803509?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
      const status = document.querySelector<HTMLElement>('#form-status');
      if (status) status.textContent = 'Opening WhatsApp with your project request…';
    };
    form?.addEventListener('submit', submitHandler);

    return () => {
      observer.disconnect();
      filterButtons.forEach((button, index) => button.removeEventListener('click', filterHandlers[index]));
      packageButtons.forEach((button, index) => button.removeEventListener('click', packageHandlers[index]));
      form?.removeEventListener('submit', submitHandler);
    };
  }, []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: siteMarkup }} />
      <NexoraChatbot />
    </>
  );
}