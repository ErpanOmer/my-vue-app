<template>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Video Element
        const video = document.querySelector('video');
        video.src = 'https://cdn.shopify.com/videos/c/o/v/55430e18329042bcbfeeb0447fcb5bea.mp4';
        video.loop = true;
        video.muted = true;
        video.play();

        // Video Texture
        const videoTexture = new THREE.VideoTexture(video);
        videoTexture.minFilter = THREE.LinearFilter;
        videoTexture.magFilter = THREE.LinearFilter;
        videoTexture.format = THREE.RGBFormat;

        // Video Plane
        const geometry = new THREE.PlaneGeometry(16, 9);
        const material = new THREE.MeshBasicMaterial({ map: videoTexture });
        const plane = new THREE.Mesh(geometry, material);
        scene.add(plane);

        // Camera Position
        camera.position.z = 20;

        // Mouse Variables
        let isDragging = false;
        let startX = 0;
        let startCurrentTime = 0;
        let videoDuration = 0;

        // Handle Mouse Down
        function onPointerDown(event) {
            isDragging = true;
            startX = event.clientX;
            startCurrentTime = video.currentTime;
            videoDuration = video.duration;
        }

        // Handle Mouse Move
        function onPointerMove(event) {
            if (!isDragging) return;
            const deltaX = event.clientX - startX;
            const progressChange = deltaX / window.innerWidth;
            const newTime = startCurrentTime + (progressChange * videoDuration);
            video.currentTime = Math.max(0, Math.min(newTime, videoDuration));
        }

        // Handle Mouse Up
        function onPointerUp() {
            if (isDragging) {
                isDragging = false;
            }
        }

        // Event Listeners
        document.addEventListener('pointerdown', onPointerDown);
        document.addEventListener('pointermove', onPointerMove);
        document.addEventListener('pointerup', onPointerUp);

        // Animation Loop
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        animate();

        // Handle Window Resize
        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        });
})
</script>