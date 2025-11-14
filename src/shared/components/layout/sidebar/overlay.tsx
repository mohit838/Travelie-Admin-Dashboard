interface OverlayProps {
  sidebarOpen: boolean;
  onClose: () => void;
}

export default function Overlay({ sidebarOpen, onClose }: OverlayProps) {
  return (
    <div
      className={`fixed inset-0 z-20 transition-all duration-300 lg:hidden ${
        sidebarOpen ? "visible bg-black/40 opacity-100 backdrop-blur-sm" : "invisible opacity-0"
      }`}
      onClick={onClose}
    />
  );
}
