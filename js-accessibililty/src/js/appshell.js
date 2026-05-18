import { createNavLink } from './components/navLink.js';

export function createAppShell() {
  const navigation = document.createElement('nav');
  navigation.className = 'sidebar';

  const labTab = createNavLink("Lab");
  navigation.append(labTab);
  return navigation;
}