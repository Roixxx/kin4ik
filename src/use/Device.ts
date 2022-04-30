import {
  computed, onMounted, onUnmounted, ref,
} from 'vue';
import { debounce } from 'ts-debounce';

export default function useDevice() {
  const windowWidth = ref(window.innerWidth);

  const onWidthChange = debounce(() => {
    windowWidth.value = window.innerWidth;
    console.log('da');
  }, 400);

  onMounted(() => window.addEventListener('resize', () => onWidthChange()));

  onUnmounted(() => window.removeEventListener('resize', () => onWidthChange()));

  const deviceType = computed(() => {
    if (windowWidth.value < 576) return 'xs';
    return 'desktop';
  });

  const width = computed(() => windowWidth.value);

  return { width, deviceType };
}
