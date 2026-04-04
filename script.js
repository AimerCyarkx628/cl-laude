document.addEventListener('DOMContentLoaded', () => {
    const claimBtn = document.getElementById('claim-btn');
    const audio = document.getElementById('prank-audio');

    claimBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Play the prank sound
        audio.play().catch(error => {
            console.error('Audio playback failed:', error);
            alert('Please allow audio playback in your browser settings to claim your reward!');
        });

        // Visual feedback
        claimBtn.textContent = 'Claim Your Free Upgrade';
        claimBtn.style.background = 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)';
        claimBtn.style.transform = 'scale(1.1)';

        // Disable button after click
        claimBtn.disabled = true;

        // Optional: Add a shake effect to the container
        const container = document.querySelector('.container');
        container.style.animation = 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both';
    });
});

// Shake animation dynamic injection
const style = document.createElement('style');
style.textContent = `
@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
}
`;
document.head.append(style);
