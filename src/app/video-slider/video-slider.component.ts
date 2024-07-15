import { Component, OnInit } from '@angular/core';

interface Video {
    thumbnail: string;
    link: string;
}

@Component({
    selector: 'app-video-slider',
    templateUrl: './video-slider.component.html',
    styleUrls: ['./video-slider.component.css']
})
export class VideoSliderComponent implements OnInit {
    videos: Video[] = [
        { thumbnail: '../../../assets/img/about/1.png', link: 'link_to_video1.mp4' },
        { thumbnail: '../../../assets/img/about/1.png', link: 'link_to_video2.mp4' },
        { thumbnail: '../../../assets/img/about/1.png', link: 'link_to_video3.mp4' },
        { thumbnail: '../../../assets/img/about/1.png', link: 'link_to_video4.mp4' },
        { thumbnail: '../../../assets/img/about/1.png', link: 'link_to_video5.mp4' }
    ];
    selectedImage: string;

    ngOnInit() {
        this.selectedImage = this.videos[0].thumbnail; // Default image
    }

    selectVideo(video: Video) {
        this.selectedImage = video.thumbnail;
    }
}
