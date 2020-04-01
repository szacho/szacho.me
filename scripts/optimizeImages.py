from PIL import Image
import os, math

PATH = r"D:\Projects\szacho.github.io\src\images\balkans"
MAX_HEIGHT = 720

def get_total_size(filenames):
    total_size = sum([ os.path.getsize(f'{PATH}\{filename}') for filename in filenames ])/1e+6
    return total_size

filenames = os.listdir(PATH)
images = [ f for f in filenames if f.split('.')[-1] in ('jpg', 'png', 'jpeg')]
total_size_before = get_total_size(images)

for image_fn in images:
    full_image_path = f'{PATH}\{image_fn}'
    image = Image.open(full_image_path)
    width, height = image.size

    if height > MAX_HEIGHT:
        scale = MAX_HEIGHT/height
        new_width = int(math.ceil(scale*width))
        image = image.resize((new_width, MAX_HEIGHT), Image.LANCZOS)
        image.save(full_image_path, optimize=True, quality=85)
    else:
        image.save(full_image_path, optimize=True, quality=85)

total_size_after = get_total_size(images)
reduced_perc = (1-total_size_after/total_size_before)*100
print(f'Total size of images has been reduced by {reduced_perc:.2f}% (from {total_size_before:.2f}MB to {total_size_after:.2f}MB).')

