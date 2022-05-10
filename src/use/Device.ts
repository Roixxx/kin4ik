import {
  computed, onMounted, onUnmounted, ref,
} from 'vue';
import { debounce } from 'ts-debounce';

export default function useDevice() {
  const windowWidth = ref(window.innerWidth);

  const onWidthChange = debounce(() => {
    windowWidth.value = window.innerWidth;
  }, 400);

  onMounted(() => window.addEventListener('resize', onWidthChange as () => void));
  onUnmounted(() => window.removeEventListener('resize', onWidthChange as () => void));

  const deviceType = computed(() => {
    if (windowWidth.value < 576) return 'xs';
    if (windowWidth.value < 768) return 'sm';
    return 'desktop';
  });

  const width = computed(() => windowWidth.value);

  return { width, deviceType };
}
