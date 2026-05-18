export function createNavLink(linkName) {
  const anchor = document.createElement('a');
  anchor.href = '#';
  anchor.role = 'button';
  anchor.tabIndex = '0';
  anchor.className = 'sidebarLink';
  anchor.textContent = linkName;

  return anchor;
}