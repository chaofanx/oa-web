import { LayoutService } from './layout.service';
import { AnalyticsService } from './analytics.service';
import { PlayerService } from './player.service';
import { StateService } from './state.service';
import { SeoService } from './seo.service';

export {
  LayoutService,
  AnalyticsService,
  PlayerService,
  SeoService,
  StateService,
};

export interface Result {
  state: number;
  message: string;
  data: any;
}
